import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import chatHandler from './api/chat.js'

function readRequestBody(req) {
  return new Promise((resolve, reject) => {
    let body = ''

    req.on('data', (chunk) => {
      body += chunk
    })

    req.on('end', () => resolve(body))
    req.on('error', reject)
  })
}

function portfolioApiPlugin() {
  return {
    name: 'portfolio-api',
    configureServer(server) {
      server.middlewares.use('/api/chat', async (req, res) => {
        try {
          const rawBody = await readRequestBody(req)
          req.body = rawBody ? JSON.parse(rawBody) : {}
          await chatHandler(req, res)
        } catch (error) {
          if (!res.headersSent) {
            res.statusCode = 500
            res.setHeader('Content-Type', 'application/json')
          }

          res.end(JSON.stringify({ error: error.message || 'Local API error' }))
        }
      })
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  Object.assign(process.env, env)

  return {
    plugins: [react(), portfolioApiPlugin()],
    build: {
      outDir: 'dist',
    },
  }
})
