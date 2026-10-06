#!/usr/bin/env python3
"""Create a local Faster-Whisper transcript reference from one video or media file.

Dependencies (install in an isolated environment):
    python -m pip install faster-whisper "yt-dlp[default]"

Only the selected video's audio is downloaded. Temporary audio is deleted when
the command exits. Transcript output is machine-generated and needs review.
"""

from __future__ import annotations

import argparse
import datetime as dt
import re
import sys
import tempfile
from pathlib import Path
from typing import Any


DEFAULT_MODEL = "small"


def timestamp(seconds: float) -> str:
    total = max(0, int(seconds))
    hours, remainder = divmod(total, 3600)
    minutes, seconds = divmod(remainder, 60)
    if hours:
        return f"{hours:02d}:{minutes:02d}:{seconds:02d}"
    return f"{minutes:02d}:{seconds:02d}"


def safe_filename(value: str) -> str:
    value = re.sub(r"[^\w.-]+", "_", value, flags=re.UNICODE).strip("._")
    return value[:100] or "transcript"


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Transcribe a short local sample with open-source Faster-Whisper."
    )
    parser.add_argument("source", help="One YouTube URL or a local audio/video file")
    parser.add_argument(
        "--output", type=Path, help="Markdown output path (default: TRANSCRIPT_<id>.md)"
    )
    parser.add_argument("--model", default=DEFAULT_MODEL, help=f"Hugging Face model (default: {DEFAULT_MODEL})")
    parser.add_argument("--language", default=None, help="Spoken language code (default: automatic detection)")
    parser.add_argument("--start-seconds", type=float, default=0, help="Sample start time (default: 0)")
    parser.add_argument("--sample-seconds", type=float, default=55, help="Sample length (default: 55)")
    parser.add_argument("--device", choices=("cpu", "cuda", "auto"), default="cpu")
    parser.add_argument("--compute-type", default="int8", help="CTranslate2 compute type (default: int8)")
    parser.add_argument("--full", action="store_true", help="Transcribe the full source instead of a sample")
    return parser.parse_args()


def download_audio(url: str, temp_dir: Path) -> tuple[Path, dict[str, Any]]:
    try:
        import yt_dlp
    except ImportError as exc:
        raise RuntimeError(
            'Missing yt-dlp. Install in this Python environment with: '
            'python -m pip install "yt-dlp[default]"'
        ) from exc

    options = {
        "format": "bestaudio/best",
        "outtmpl": str(temp_dir / "%(id)s.%(ext)s"),
        "noplaylist": True,
        "quiet": True,
        "no_warnings": False,
        "overwrites": True,
    }
    with yt_dlp.YoutubeDL(options) as downloader:
        info = downloader.extract_info(url, download=True)
        file_path = Path(downloader.prepare_filename(info))
    if not file_path.exists():
        candidates = [path for path in temp_dir.iterdir() if path.is_file()]
        if len(candidates) != 1:
            raise RuntimeError("yt-dlp finished but the downloaded audio file could not be identified")
        file_path = candidates[0]
    return file_path, info


def main() -> int:
    args = parse_args()
    if args.start_seconds < 0 or args.sample_seconds <= 0:
        print("start-seconds must be >= 0 and sample-seconds must be > 0", file=sys.stderr)
        return 2

    try:
        from faster_whisper import WhisperModel
    except ImportError as exc:
        print(
            'Missing faster-whisper. Install in this Python environment with: '
            'python -m pip install faster-whisper',
            file=sys.stderr,
        )
        return 2

    source_path = Path(args.source).expanduser()
    local_source = source_path.is_file()
    info: dict[str, Any] = {}

    try:
        with tempfile.TemporaryDirectory(prefix="youtube-manager-asr-") as work:
            if local_source:
                audio_path = source_path.resolve()
                title = source_path.stem
                source_ref = str(audio_path)
                video_id = safe_filename(source_path.stem)
            else:
                audio_path, info = download_audio(args.source, Path(work))
                title = str(info.get("title") or info.get("id") or "YouTube video")
                video_id = safe_filename(str(info.get("id") or title))
                source_ref = str(info.get("webpage_url") or args.source)

            model = WhisperModel(args.model, device=args.device, compute_type=args.compute_type)
            end = args.start_seconds + args.sample_seconds
            transcribe_options: dict[str, Any] = {
                "beam_size": 5,
                "vad_filter": True,
            }
            if args.language:
                transcribe_options["language"] = args.language
            if not args.full:
                transcribe_options["clip_timestamps"] = f"{args.start_seconds},{end}"
            segments, detected = model.transcribe(str(audio_path), **transcribe_options)
            transcript_lines = []
            for segment in segments:
                text = segment.text.strip()
                if text:
                    transcript_lines.append(f"[{timestamp(segment.start)}] {text}")

            coverage = "Full source (requested)" if args.full else (
                f"{timestamp(args.start_seconds)}–{timestamp(end)} sample"
            )
            output = args.output or Path(f"TRANSCRIPT_{video_id}.md")
            output.parent.mkdir(parents=True, exist_ok=True)
            output.write_text(
                "\n".join(
                    [
                        f"# {title} — transcript reference",
                        "",
                        f"- Source: {source_ref}",
                        f"- Created: {dt.date.today().isoformat()}",
                        f"- Model: `{args.model}`",
                        f"- Language requested: `{args.language or 'automatic detection'}`; detected: `{getattr(detected, 'language', 'unknown')}`",
                        f"- Runtime: {args.device}, `{args.compute_type}`",
                        f"- Coverage: {coverage}",
                        "- Status: machine-generated, unreviewed; not verified verbatim.",
                        "",
                        "## Transcript",
                        "",
                        *(transcript_lines or ["(No speech segments were returned.)"]),
                        "",
                        "## Review note",
                        "",
                        "Check product names, English code-switching, and uncertain words against the audio before using exact wording as a voice reference.",
                        "",
                    ]
                ),
                encoding="utf-8",
            )
            print(f"Saved {output.resolve()}")
            print(f"Coverage: {coverage}; language detected: {getattr(detected, 'language', 'unknown')}")
        return 0
    except Exception as exc:  # Surface actionable setup/download/model errors to the agent.
        print(f"Transcription failed: {type(exc).__name__}: {exc}", file=sys.stderr)
        return 1


if __name__ == "__main__":
    raise SystemExit(main())
