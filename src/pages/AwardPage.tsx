import { useEffect, type CSSProperties } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { TradingCard } from "../components/TradingCard";
import { AWARDS } from "../data/awards";

export function AwardPage() {
  const { slug } = useParams<{ slug: string }>();
  const award = AWARDS.find((item) => item.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!award) {
    return <Navigate to="/" replace />;
  }

  return (
    <main
      className="page-container"
      style={{ "--award-accent": award.accentColor } as CSSProperties}
    >
      <nav className="award-nav">
        <Link to="/" className="back-link">
          <span aria-hidden="true">&larr;</span> All Awards
        </Link>
      </nav>

      <header className="award-header">
        <h1 className="award-page-title">{award.title}</h1>
        <p className="award-page-description">{award.description}</p>
        <p className="award-page-hint">
          Tap or click any card to flip for stats and highlights
        </p>
      </header>

      <section className="division-section" aria-labelledby="women-heading">
        <h2 id="women-heading" className="division-heading">
          Women&apos;s Finalists
        </h2>
        <div className="cards-row">
          {award.finalists.women.map((finalist) => (
            <TradingCard
              key={finalist.id}
              finalist={finalist}
              awardTitle={award.title}
              accentColor={award.accentColor}
            />
          ))}
        </div>
      </section>

      <section className="division-section" aria-labelledby="men-heading">
        <h2 id="men-heading" className="division-heading">
          Men&apos;s Finalists
        </h2>
        <div className="cards-row">
          {award.finalists.men.map((finalist) => (
            <TradingCard
              key={finalist.id}
              finalist={finalist}
              awardTitle={award.title}
              accentColor={award.accentColor}
            />
          ))}
        </div>
      </section>
    </main>
  );
}