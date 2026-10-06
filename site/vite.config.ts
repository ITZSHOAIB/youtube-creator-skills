import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig, loadEnv } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Extra dev-server hostnames (e.g. a Tailscale Serve HTTPS endpoint) live in
  // site/.env.local (gitignored): DEV_ALLOWED_HOSTS=host1,host2
  const allowedHosts = loadEnv(mode, process.cwd(), '')
    .DEV_ALLOWED_HOSTS?.split(',')
    .map((host) => host.trim())
    .filter(Boolean)

  return {
    plugins: [react(), tailwindcss()],
    server: allowedHosts?.length ? { allowedHosts } : {},
  }
})
