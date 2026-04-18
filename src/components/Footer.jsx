import { contactLinks } from '../data/portfolio'

function Footer() {
  return (
    <footer className="footer section layout-grid" id="contact" data-cta-area="true">
      <div className="footer__grid">
        <div className="footer__cta">
          <span className="eyebrow t-label">Contact</span>
          <h2 className="t-display">Need a portfolio, product UI, or AI-backed workflow that actually ships?</h2>
          <p className="t-body footer__body">
            I help teams turn rough ideas into clean interfaces and dependable systems. If you want
            thoughtful execution and a sharp finish, let's talk.
          </p>
          <a href="mailto:dushyantkhandelwal4665@gmail.com" className="t-heading magnetic footer__mail" data-cursor="Email">
            dushyantkhandelwal4665@gmail.com
          </a>
          <div className="footer__actions">
            <a className="button-link magnetic" href="mailto:dushyantkhandelwal4665@gmail.com" data-cursor="Email">
              Email me
            </a>
            <a className="button-link button-link--ghost magnetic" href="#work" data-cursor="Open">
              Back to work
            </a>
          </div>
        </div>
        <div className="footer__links">
          {contactLinks.map((link) => (
            <a
              href={link.href}
              key={link.label}
              className="footer__link magnetic"
              data-cursor="Open"
            >
              <span className="t-label">{link.label}</span>
              <span className="t-mono">{link.value}</span>
            </a>
          ))}
        </div>
      </div>
      <div className="footer__meta">
        <span className="t-mono">(c) 2026 Dushyant Khandelwal</span>
        <span className="t-mono">Built with React + Vite</span>
      </div>
    </footer>
  )
}

export default Footer
