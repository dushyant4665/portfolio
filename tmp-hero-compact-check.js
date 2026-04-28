const { chromium } = require('playwright')

;(async () => {
  const browser = await chromium.launch({ headless: true })
  const context = await browser.newContext({ viewport: { width: 1536, height: 960 } })
  await context.addInitScript(() => sessionStorage.setItem('dushyant-preloader-seen', 'true'))
  const page = await context.newPage()
  await page.goto('http://127.0.0.1:4173', { waitUntil: 'networkidle', timeout: 20000 })
  const metrics = await page.evaluate(() => {
    const shell = document.querySelector('.hero-page__shell')?.getBoundingClientRect()
    const image = document.querySelector('.hero-page__image-frame')?.getBoundingClientRect()
    const links = Array.from(document.querySelectorAll('.hero-page__connect-item')).map((el) => el.textContent.trim())
    return {
      viewport: { width: window.innerWidth, height: window.innerHeight },
      scrollWidth: document.documentElement.scrollWidth,
      shell: shell ? { width: Math.round(shell.width), height: Math.round(shell.height) } : null,
      image: image ? { width: Math.round(image.width), height: Math.round(image.height) } : null,
      links,
    }
  })
  console.log(JSON.stringify(metrics, null, 2))
  await browser.close()
})().catch((error) => {
  console.error(error)
  process.exit(1)
})