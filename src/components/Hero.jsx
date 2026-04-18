const connectItems = [
  { label: 'Twitter / X', href: 'https://x.com/dushyant4665' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/dushyant-khandelwal-516319221/' },
  { label: 'Instagram', href: 'https://instagram.com/dushyantkhandelwal0' },
  { label: 'Email', href: 'mailto:dushyantkhandelwal4665@gmail.com' },
]

function Hero() {
  return (
    <section className="hero-page layout-grid" id="top">
      <div className="hero-page__shell">
        <div className="hero-page__content">
          <div className="hero-page__monogram">D-K</div>

          <div className="hero-page__intro">
            <h1 className="hero-page__title">
              <span className="hero-page__title-strong">Dushyant</span> builds clean digital products
              <br />
              from <span className="hero-page__title-muted">India.</span>
            </h1>

            <p className="hero-page__subtitle">
              Full-stack developer and SaaS builder focused on real-time collaboration platforms, AI-powered systems, and products that ship with Stripe billing.
            </p>
          </div>

          <div className="hero-page__connect">
            <div className="hero-page__connect-label">Connect</div>
            <div className="hero-page__connect-list">
              {connectItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="hero-page__connect-item magnetic"
                  data-cursor="Open"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="hero-page__visual">
          <div className="hero-page__image-frame" data-active="false">
            <img
              className="hero-page__image"
              src="/hero-image.png"
              alt="Portrait of Dushyant in monochrome"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
