import Image from "next/image";
import Link from "next/link";
import { IconStyle, PageBlock } from "@/lib/types";
import { urlFor } from "@/lib/sanity.image";
import { HeroSlider } from "@/components/HeroSlider";

type PageBuilderProps = {
  blocks: PageBlock[];
};

function imageUrl(source: unknown, width: number, height: number) {
  return urlFor(source as Parameters<typeof urlFor>[0])
    .width(width)
    .height(height)
    .fit("max")
    .auto("format")
    .url();
}

function renderPortableText(
  body: Array<{ children?: Array<{ text?: string }> }> | undefined
): string[] {
  if (!body) return [];
  return body
    .map((block) =>
      (block.children || [])
        .map((child) => child.text || "")
        .join("")
        .trim()
    )
    .filter(Boolean);
}

function SectionHeading({
  heading,
  highlightedHeading,
  className = ""
}: {
  heading: string;
  highlightedHeading?: string;
  className?: string;
}) {
  return (
    <h2 className={className}>
      {heading}
      {highlightedHeading ? (
        <>
          {" "}
          <span>{highlightedHeading}</span>
        </>
      ) : null}
    </h2>
  );
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

export function PageBuilder({ blocks }: PageBuilderProps) {
  return (
    <>
      {blocks.map((block, index) => {
        const key = block._key || `${block._type}-${index}`;

        if (block._type === "heroBlock") {
          return <HeroSlider key={key} block={block} />;
        }

        if (block._type === "pricingBlock") {
          return (
            <section key={key} className="section pricing-section" id="packages">
              <div className="container">
                <SectionHeading
                  heading={block.heading || "Paket Internet"}
                  highlightedHeading={block.highlightedHeading}
                  className="section-title"
                />
                <div className="pricing-grid">
                  {block.plans.map((plan) => (
                    <article
                      key={plan._key || plan.title}
                      className={`plan-card ${plan.isFeatured ? "featured" : ""}`}
                    >
                      {plan.badge ? <span className="plan-badge">{plan.badge}</span> : null}
                      <h3>{plan.title}</h3>
                      <p className="speed">{plan.speed}</p>
                      <ul>
                        {(plan.features || []).map((feature) => (
                          <li key={feature}>{feature}</li>
                        ))}
                      </ul>
                      <p className="price">
                        {plan.price}
                        {plan.period ? <small> {plan.period}</small> : null}
                      </p>
                      {plan.buttonLabel && plan.buttonLink ? (
                        <Link
                          className={plan.isFeatured ? "btn-primary" : "btn-plan"}
                          href={plan.buttonLink}
                        >
                          {plan.buttonLabel}
                        </Link>
                      ) : null}
                    </article>
                  ))}
                </div>
                {block.allPackagesLabel && block.allPackagesLink ? (
                  <Link className="text-link" href={block.allPackagesLink}>
                    {block.allPackagesLabel}
                    <span aria-hidden="true">-&gt;</span>
                  </Link>
                ) : null}
              </div>
            </section>
          );
        }

        if (block._type === "coverageBlock") {
          return (
            <section key={key} className="coverage-section" id="coverage">
              <div className="container">
                <div className="coverage-card">
                  <div className="coverage-copy">
                    {block.label ? <p className="section-label">{block.label}</p> : null}
                    <SectionHeading
                      heading={block.heading}
                      highlightedHeading={block.highlightedHeading}
                    />
                    {block.description ? <p>{block.description}</p> : null}
                    {block.buttonLabel && block.buttonLink ? (
                      <Link className="btn-secondary" href={block.buttonLink}>
                        {block.buttonLabel}
                        <span aria-hidden="true">-&gt;</span>
                      </Link>
                    ) : null}
                  </div>
                  <div className="coverage-map">
                    {block.mapImage ? (
                      <Image
                        src={imageUrl(block.mapImage, 940, 360)}
                        alt={block.heading}
                        width={940}
                        height={360}
                      />
                    ) : (
                      <div className="coverage-placeholder">
                        <span>Paguyangan</span>
                        <span>Bumiayu</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>
          );
        }

        if (block._type === "useCaseBlock") {
          return (
            <section key={key} className="section usecase-section">
              <div className="container">
                <SectionHeading
                  heading={block.heading}
                  highlightedHeading={block.highlightedHeading}
                  className="section-title"
                />
                <div className="usecase-grid">
                  {block.items.map((item) => (
                    <article key={item._key || item.title} className="usecase-card">
                      <IconBadge icon={item.icon} />
                      <div>
                        <h3>{item.title}</h3>
                        {item.description ? <p>{item.description}</p> : null}
                      </div>
                      {item.image ? (
                        <Image
                          src={imageUrl(item.image, 240, 160)}
                          alt={item.title}
                          width={120}
                          height={80}
                        />
                      ) : null}
                    </article>
                  ))}
                </div>
              </div>
            </section>
          );
        }

        if (block._type === "testimonialBlock") {
          return (
            <section key={key} className="section testimonial-section" id="testimonials">
              <div className="container">
                <SectionHeading
                  heading={block.heading || "Apa Kata"}
                  highlightedHeading={block.highlightedHeading}
                  className="section-title"
                />
                <div className="testimonial-grid">
                  {block.items.map((item) => (
                    <article key={item._key || item.name} className="testimonial-card">
                      <span className="quote-mark">"</span>
                      <p>{item.message}</p>
                      <div className="stars" aria-label={`${item.rating || 5} dari 5`}>
                        {Array.from({ length: item.rating || 5 }).map((_, starIndex) => (
                          <span key={`${item.name}-star-${starIndex}`}>*</span>
                        ))}
                      </div>
                      <div className="testimonial-person">
                        {item.avatar ? (
                          <Image
                            src={imageUrl(item.avatar, 96, 96)}
                            alt={item.name}
                            width={48}
                            height={48}
                          />
                        ) : (
                          <span aria-hidden="true">{item.name.slice(0, 1)}</span>
                        )}
                        <div>
                          <h3>{item.name}</h3>
                          {item.role ? <small>{item.role}</small> : null}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
                <div className="slider-dots" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </section>
          );
        }

        if (block._type === "ctaBlock") {
          return (
            <section key={key} className="cta-strip">
              <div className="container cta-banner">
                <div>
                  <h2>{block.title}</h2>
                  {block.subtitle ? <p>{block.subtitle}</p> : null}
                </div>
                {block.buttonLabel && block.buttonLink ? (
                  <Link className="btn-primary" href={block.buttonLink}>
                    {block.buttonLabel}
                    <span aria-hidden="true">-&gt;</span>
                  </Link>
                ) : null}
              </div>
            </section>
          );
        }

        if (block._type === "featureBlock") {
          return (
            <section key={key} className="section" id="services">
              <div className="container two-col">
                <div>
                  {block.label ? <p className="section-label">{block.label}</p> : null}
                  <h2>{block.heading}</h2>
                  {block.description ? <p>{block.description}</p> : null}
                </div>
                <div className="info-card">
                  {block.highlights.map((item) => (
                    <div key={item} className="highlight-item">
                      <span>*</span>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          );
        }

        if (block._type === "contactBlock") {
          return (
            <section key={key} className="section" id="contact">
              <div className="container contact-layout">
                <div>
                  {block.label ? <p className="section-label">{block.label}</p> : null}
                  <h2>
                    {block.sectionTitle}
                    {block.sectionSubtitle ? (
                      <>
                        <br />
                        <span>{block.sectionSubtitle}</span>
                      </>
                    ) : null}
                  </h2>
                  <form className="contact-form">
                    <input placeholder="Nama Lengkap" />
                    <input placeholder="Email" />
                    <input placeholder="No. Telepon" />
                    <input placeholder="Subjek" />
                    <textarea placeholder="Tulis pesan Anda" rows={5} />
                    <button type="button" className="btn-primary">
                      Send Message
                    </button>
                  </form>
                </div>
                <aside className="contact-card">
                  {block.address ? (
                    <>
                      <h3>Address</h3>
                      <p>{block.address}</p>
                    </>
                  ) : null}
                  {block.phone || block.email ? (
                    <>
                      <h3>Contact</h3>
                      {block.phone ? <p>{block.phone}</p> : null}
                      {block.email ? <p>{block.email}</p> : null}
                    </>
                  ) : null}
                  {block.mapEmbedUrl ? (
                    <iframe title="map" src={block.mapEmbedUrl} loading="lazy" />
                  ) : null}
                </aside>
              </div>
            </section>
          );
        }

        if (block._type === "contentBlock") {
          const paragraphs = renderPortableText(block.body);
          return (
            <section key={key} className="section">
              <div className="container content-wrap">
                <h2>{block.heading}</h2>
                {paragraphs.length ? (
                  paragraphs.map((paragraph, paragraphIndex) => (
                    <p key={`${key}-paragraph-${paragraphIndex}`}>{paragraph}</p>
                  ))
                ) : (
                  <p>Tambahkan konten dari Sanity Studio untuk section ini.</p>
                )}
              </div>
            </section>
          );
        }

        return null;
      })}
    </>
  );
}
