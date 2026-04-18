function About() {
  return (
    <section className="about section layout-grid" id="about">
      <div className="about__grid">
        <div className="about__copy">
          <span className="eyebrow t-label">About</span>
          <h2 className="t-display about__title">Clean products. Clear systems. Direct communication.</h2>
          <p className="t-body">
            I build polished digital products and AI-backed systems with a focus on clarity,
            reliability, and execution that holds up in real use.
          </p>
        </div>
        <div className="about__stack">
          <span className="eyebrow t-label">Email</span>
          <a className="t-heading magnetic about__mail" href="mailto:dushyantkhandelwal4665@gmail.com" data-cursor="Email">
            dushyantkhandelwal4665@gmail.com
          </a>
          <p className="t-body">
            Reach out for freelance work, product builds, frontend systems, or AI workflow projects.
          </p>
          <a
            className="button-link button-link--ghost magnetic"
            href="mailto:dushyantkhandelwal4665@gmail.com"
            data-cursor="Email"
          >
            Email me
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
