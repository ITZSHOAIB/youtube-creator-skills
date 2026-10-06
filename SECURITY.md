# Security Policy

## Supported Versions

Security fixes are applied to the latest code on `main`. There are no tagged
release branches:

| Version | Supported |
|---|---|
| `main` (latest) | ✅ |
| Older commits / forks | ❌ |

## Reporting a Vulnerability

Please **do not** open a public issue for security vulnerabilities.

Instead, report them privately:

1. Go to the repository's **Security** tab → **Report a vulnerability**
   (requires [private vulnerability reporting](https://docs.github.com/en/code-security/security-advisories/guidance-on-reporting-and-writing-information-about-vulnerabilities/reporting-a-vulnerability-in-a-repository) to be enabled on the repository),
   or
2. Contact the maintainer directly via the contact method listed on
   [@ITZSHOAIB's GitHub profile](https://github.com/ITZSHOAIB).

When reporting, include:

- What the vulnerability is and where it occurs (skill file, site code, etc.)
- Steps to reproduce it
- The impact you expect it would have
- Any suggested fixes, if you have them

## What counts

This repository ships agent instructions (`skills/**/*.md`) and a static
documentation site (`site/`). Relevant reports include, for example:

- Instructions that could cause an agent to exfiltrate or leak private
  channel data, transcripts, or credentials
- XSS or other injection issues in the documentation site
- Supply-chain issues (unsafe scripts, dependency confusion)

## Response

- Acknowledgement within **7 days** of the report
- An honest assessment and fix plan for confirmed issues
- Credit in the advisory or changelog if you want it (just say so)

Reports that are clearly out of scope (e.g. issues in third-party tools this
project merely links to) will be redirected rather than fixed here.
