import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { AWARDS, type Award } from "../data/awards";

function AwardWatermark({ award }: { award: Award }) {
  if (award.bgImage) {
    return (
      <img
        src={award.bgImage}
        alt=""
        className="award-card-bg-img"
        aria-hidden="true"
      />
    );
  }

  switch (award.slug) {
    case "most-improved":
      // Stopwatch
      return (
        <svg
          className="award-card-bg-svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.35"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <line x1="10" y1="2" x2="14" y2="2" />
          <line x1="12" y1="2" x2="12" y2="5" />
          <line x1="18.5" y1="7.5" x2="20.5" y2="5.5" />
          <circle cx="12" cy="14" r="8" />
          <polyline points="12 10 12 14 15.5 15.5" />
        </svg>
      );

    case "mvp":
      // Trophy
      return (
        <svg
          className="award-card-bg-svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.35"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
          <path d="M4 22h16" />
          <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
          <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
          <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
        </svg>
      );

    default:
      // Placeholder star for Freshman of the Year (swap via bgImage or replace SVG later)
      return (
        <svg
          className="award-card-bg-svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.35"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01L12 2z" />
        </svg>
      );
  }
}

export function HomePage() {
  return (
    <main className="page-container">
      <header className="site-header">
        <div className="site-logo-badge">
          <img src="/images/GroveCityLogo.webp" alt="Grove City College" />
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

              <div className="award-card-bg" aria-hidden="true">
                <AwardWatermark award={award} />
              </div>

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