"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HeroBlock, HeroSlide, IconStyle } from "@/lib/types";
import { urlFor } from "@/lib/sanity.image";

const fallbackHeroImage =
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=80";

function imageUrl(source: unknown, width: number) {
  return urlFor(source as Parameters<typeof urlFor>[0])
    .width(width)
    .quality(92)
    .auto("format")
    .url();
}

function IconBadge({ icon = "wifi" }: { icon?: IconStyle }) {
  const labels: Record<IconStyle, string> = {
    speed: "SP",
    shield: "SH",
    wifi: "WF",
    price: "RP",
    home: "HM",
    business: "BS",
    game: "GM"
  };

  return (
    <span className={`icon-badge icon-${icon}`} aria-hidden="true">
      {labels[icon]}
    </span>
  );
}

function getSlides(block: HeroBlock): HeroSlide[] {
  if (block.slides?.length) return block.slides;

  return [
    {
      _key: block._key,
      badge: block.badge,
      title: block.title,
      highlightedTitle: block.highlightedTitle,
      subtitle: block.subtitle,
      ctaLabel: block.ctaLabel,
      ctaLink: block.ctaLink,
      secondaryCtaLabel: block.secondaryCtaLabel,
      secondaryCtaLink: block.secondaryCtaLink,
      heroImage: block.heroImage,
      features: block.features
    }
  ];
}

export function HeroSlider({ block }: { block: HeroBlock }) {
  const slides = useMemo(() => getSlides(block), [block]);
  const [activeIndex, setActiveIndex] = useState(0);
  const hasMultipleSlides = slides.length > 1;
  const showControls = block.showControls !== false && hasMultipleSlides;
  const showDots = block.showDots !== false && hasMultipleSlides;
  const autoplay = block.autoplay !== false && hasMultipleSlides;
  const interval = Math.max(block.autoplayInterval || 6000, 2500);

  useEffect(() => {
    if (!autoplay) return undefined;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, interval);

    return () => window.clearInterval(timer);
  }, [autoplay, interval, slides.length]);

  function goToSlide(index: number) {
    setActiveIndex((index + slides.length) % slides.length);
  }

  return (
    <section className="hero hero-slider" id="home" aria-roledescription="carousel">
      <div className="hero-track">
        {slides.map((slide, index) => {
          const heroImage = slide.heroImage
            ? imageUrl(slide.heroImage, 2400)
            : fallbackHeroImage;
          const hasCopy =
            Boolean(slide.badge) ||
            Boolean(slide.title) ||
            Boolean(slide.highlightedTitle) ||
            Boolean(slide.subtitle) ||
            Boolean(slide.ctaLabel && slide.ctaLink) ||
            Boolean(slide.secondaryCtaLabel && slide.secondaryCtaLink) ||
            Boolean(slide.features?.length);

          return (
            <article
              key={slide._key || `${slide.title}-${index}`}
              className={`hero-slide ${index === activeIndex ? "is-active" : ""}`}
              aria-hidden={index !== activeIndex}
            >
              <div className="hero-visual" aria-hidden="true">
                <Image
                  src={heroImage}
                  alt=""
                  fill
                  priority={index === 0}
                  sizes="100vw"
                />
              </div>
              <div className="container hero-grid">
                {hasCopy ? (
                  <div className="hero-copy">
                    {slide.badge ? <span className="badge">{slide.badge}</span> : null}
                    {slide.title || slide.highlightedTitle ? (
                      <h1>
                        {slide.title}
                        {slide.highlightedTitle ? <span>{slide.highlightedTitle}</span> : null}
                      </h1>
                    ) : null}
                    <div className="hero-copy-panel">
                      {slide.subtitle ? <p>{slide.subtitle}</p> : null}
                      <div className="hero-actions">
                        {slide.ctaLabel && slide.ctaLink ? (
                          <Link className="btn-primary" href={slide.ctaLink}>
                            {slide.ctaLabel}
                            <span aria-hidden="true">-&gt;</span>
                          </Link>
                        ) : null}
                        {slide.secondaryCtaLabel && slide.secondaryCtaLink ? (
                          <Link className="btn-outline" href={slide.secondaryCtaLink}>
                            {slide.secondaryCtaLabel}
                          </Link>
                        ) : null}
                      </div>
                      {slide.features?.length ? (
                        <div className="hero-features">
                          {slide.features.map((item) => (
                            <article key={item._key || item.title}>
                              <IconBadge icon={item.icon} />
                              <h3>{item.title}</h3>
                              {item.description ? <p>{item.description}</p> : null}
                            </article>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </div>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>

      {showControls ? (
        <div className="hero-controls">
          <button type="button" aria-label="Slide sebelumnya" onClick={() => goToSlide(activeIndex - 1)}>
            <span aria-hidden="true">&#8249;</span>
          </button>
          <button type="button" aria-label="Slide berikutnya" onClick={() => goToSlide(activeIndex + 1)}>
            <span aria-hidden="true">&#8250;</span>
          </button>
        </div>
      ) : null}

      {showDots ? (
        <div className="hero-dots" aria-label="Navigasi slide">
          {slides.map((slide, index) => (
            <button
              key={slide._key || `${slide.title}-dot-${index}`}
              type="button"
              className={index === activeIndex ? "is-active" : ""}
              aria-label={`Buka slide ${index + 1}`}
              aria-current={index === activeIndex ? "true" : undefined}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      ) : null}
    </section>
  );
}
