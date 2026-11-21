import { useState, type CSSProperties, type KeyboardEvent } from "react";
import type { Finalist } from "../data/awards";
import { CardFrame } from "./CardFrame";
import "./TradingCard.css";

interface TradingCardProps {
  finalist: Finalist;
  awardTitle: string;
  accentColor: string;
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");
}

export function TradingCard({
  finalist,
  awardTitle,
  accentColor,
}: TradingCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [imgFailed, setImgFailed] = useState(false);

  const toggleFlip = () => setIsFlipped((prev) => !prev);

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleFlip();
    }
  };

  return (
    <div
      className="trading-card"
      style={{ "--card-accent": accentColor } as CSSProperties}
      role="button"
      tabIndex={0}
      aria-pressed={isFlipped}
      aria-label={`${finalist.name}, ${awardTitle} finalist. Press to flip card.`}
      onClick={toggleFlip}
      onKeyDown={handleKeyDown}
    >
      <div className={`trading-card-inner ${isFlipped ? "is-flipped" : ""}`}>
        {/* FRONT FACE */}
        <div className="trading-card-face trading-card-front">
          {!imgFailed ? (
            <img
              src={finalist.photoUrl}
              alt={finalist.name}
              className="trading-card-photo"
              loading="lazy"
              onError={() => setImgFailed(true)}
            />
          ) : (
            <div className="trading-card-photo-fallback" aria-hidden="true">
              <span>{getInitials(finalist.name)}</span>
            </div>
          )}

          <CardFrame />

          <span className="trading-card-flip-hint" aria-hidden="true">
            Tap to flip
          </span>

          <div className="trading-card-nameplate">
            <h3 className="trading-card-name">{finalist.name}</h3>
            {finalist.classYear && (
              <span className="trading-card-year">{finalist.classYear}</span>
            )}
          </div>
        </div>

        {/* BACK FACE */}
        <div className="trading-card-face trading-card-back">
          <div className="trading-card-back-inner">
            <header className="trading-card-back-header">
              <div className="trading-card-back-title-group">
                <span className="trading-card-back-award">{awardTitle}</span>
                <h3 className="trading-card-back-name">{finalist.name}</h3>
                {finalist.classYear && (
                  <span className="trading-card-back-year">
                    {finalist.classYear}
                  </span>
                )}
              </div>
              <div className="trading-card-back-logo">
                <img src="/images/GroveCityLogo.png" alt="Grove City College" />
              </div>
            </header>

            <div className="trading-card-back-body">
              {finalist.stats.length > 0 && (
                <div className="trading-card-stats">
                  {finalist.stats.map((stat) => {
                    const isWide = stat.value.length > 10;
                    return (
                      <div
                        key={stat.label}
                        className={`trading-card-stat ${isWide ? "is-wide" : ""}`}
                      >
                        <span className="trading-card-stat-label">
                          {stat.label}
                        </span>
                        <span className="trading-card-stat-value">
                          {stat.value}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}

              {finalist.highlights && finalist.highlights.length > 0 && (
                <ul className="trading-card-highlights">
                  {finalist.highlights.map((item) => (
                    <li key={item} className="trading-card-highlight">
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {finalist.bio && (
                <p className="trading-card-bio">{finalist.bio}</p>
              )}
            </div>

            <footer className="trading-card-back-footer" aria-hidden="true">
              Tap card to flip back
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}