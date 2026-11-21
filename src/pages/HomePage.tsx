import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { AWARDS } from "../data/awards";

export function HomePage() {
  return (
    <main className="page-container">
      <header className="site-header">
        <div className="site-logo-badge">
          <img src="/images/GroveCityLogo.png" alt="Grove City College" />
        </div>
        <span className="site-eyebrow">Grove City Cross Country</span>
        <h1 className="site-title">End of Year Awards</h1>
        <p className="site-subtitle">
          Select an award below to view this year&apos;s finalists and flip each
          card for season highlights.
        </p>
      </header>

      <section className="awards-grid" aria-label="Team Awards">
        {AWARDS.map((award) => {
          const totalFinalists =
            award.finalists.women.length + award.finalists.men.length;

          return (
            <Link
              key={award.slug}
              to={`/award/${award.slug}`}
              className="award-card"
              style={{ "--award-accent": award.accentColor } as CSSProperties}
            >
              <div className="award-card-accent" aria-hidden="true" />
              <div className="award-card-content">
                <span className="award-card-count">
                  {totalFinalists} Finalists
                </span>
                <h2 className="award-card-title">{award.title}</h2>
                <p className="award-card-description">{award.description}</p>
                <span className="award-card-cta">
                  View Finalists <span aria-hidden="true">&rarr;</span>
                </span>
              </div>
            </Link>
          );
        })}
      </section>
    </main>
  );
}