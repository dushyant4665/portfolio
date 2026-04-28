const links = [
  ['Services', '#work'],
  ['Projects', '#projects'],
  ['About', '#about'],
  ['Contact', '#contact'],
]

function Nav() {
  return (
    <header className="nav layout-grid">
      <div className="nav__bar">
        <a className="nav__brand magnetic" href="#top" aria-label="Go to top" data-cursor="Top">
          <span className="t-label">Dushyant Khandelwal</span>
          <span className="t-mono">Full Stack Developer / AI Builder</span>
        </a>
        <nav className="nav__links" aria-label="Primary">
          {links.map(([label, href]) => (
            <a className="nav__link magnetic t-mono" key={href} href={href} data-cursor="Open">
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Nav