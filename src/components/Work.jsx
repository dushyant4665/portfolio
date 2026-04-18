import { featuredWork } from '../data/portfolio'

function Work() {
  return (
    <section className="work section layout-grid" id="work">
      <div className="section-header section-header--split">
        <div className="section-header__content">
          <span className="eyebrow t-label">Stoic Direction</span>
          <h2 className="t-display">Products should feel steady, sharp, and hard to forget.</h2>
          <p className="t-body section-intro">
            Dark product systems work best when they stay restrained: less noise, better hierarchy,
            and stronger decisions that still hold up in production.
          </p>
        </div>
        <a className="section-link magnetic" href="#contact" data-cursor="Open">
          Build with intent
        </a>
      </div>
      <div className="work__grid work__grid--stoic">
        {featuredWork.map((entry, index) => (
          <article className={`stoic-card stoic-card--${index + 1}`} key={entry.id}>
            <div
              className="stoic-card__image"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(7, 7, 8, 0.12), rgba(7, 7, 8, 0.82)), url(${entry.image})`,
              }}
            />
            <div className="stoic-card__content">
              <div className="stoic-card__meta">
                <span className="t-mono">{entry.id}</span>
                <span className="t-mono">{entry.title}</span>
              </div>
              <blockquote className="stoic-card__quote t-heading">&quot;{entry.quote}&quot;</blockquote>
              <p className="t-body stoic-card__note">{entry.note}</p>
            </div>
            <div className="stoic-card__footer">
              <span className="t-mono stoic-card__tag">Dark stoic product thinking</span>
              <a className="button-link magnetic" href={entry.href} data-cursor="Open">
                {entry.cta}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Work
