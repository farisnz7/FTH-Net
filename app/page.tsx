import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { fallbackHomePageData } from "@/lib/fallback-data";
import { homePageQuery } from "@/lib/queries";
import { sanityClient } from "@/lib/sanity.client";
import { urlFor } from "@/lib/sanity.image";
import { HomePageData } from "@/lib/types";

async function getHomePageData(): Promise<HomePageData> {
  try {
    const data = await sanityClient.fetch<HomePageData | null>(homePageQuery);
    if (!data) return fallbackHomePageData;
    return {
      ...fallbackHomePageData,
      ...data,
      hero: { ...fallbackHomePageData.hero, ...data.hero },
      about: { ...fallbackHomePageData.about, ...data.about },
      contact: { ...fallbackHomePageData.contact, ...data.contact },
      footer: { ...fallbackHomePageData.footer, ...data.footer }
    };
  } catch {
    return fallbackHomePageData;
  }
}

export default async function Home() {
  const data = await getHomePageData();

  return (
    <main>
      <Navbar />
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="badge">{data.hero.badge}</span>
            <h1>{data.hero.title}</h1>
            <p>{data.hero.subtitle}</p>
            <a className="btn-primary" href={data.hero.ctaLink}>
              {data.hero.ctaLabel}
            </a>
          </div>
          <div className="hero-image-card">
            <Image
              src={
                data.hero.heroImage
                  ? urlFor(data.hero.heroImage).width(720).height(480).url()
                  : "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"
              }
              alt="Sample hero"
              width={720}
              height={480}
            />
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container two-col">
          <div>
            <p className="section-label">Why Choose Us</p>
            <h2>{data.about.heading}</h2>
            <p>{data.about.description}</p>
          </div>
          <div className="info-card">
            {data.about.highlights.map((item) => (
              <div key={item} className="highlight-item">
                <span>✦</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark" id="packages">
        <div className="container">
          <h2>Paket Internet FTH Net</h2>
          <div className="cards-grid">
            {data.packages.map((pkg) => (
              <article key={pkg.title} className="plan-card">
                <h3>{pkg.title}</h3>
                <p className="speed">{pkg.speed}</p>
                <p className="price">{pkg.price}</p>
                <ul>
                  {pkg.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="testimonials">
        <div className="container">
          <h2>Experience Shared by Our Clients</h2>
          <div className="cards-grid small-grid">
            {data.testimonials.map((testimonial) => (
              <article key={testimonial.name} className="testimonial-card">
                <p>{"★".repeat(testimonial.rating)}</p>
                <h3>{testimonial.name}</h3>
                <small>{testimonial.role}</small>
                <p>{testimonial.message}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="container contact-layout">
          <div>
            <p className="section-label">Contact Us</p>
            <h2>
              {data.contact.sectionTitle} <br />
              <span>{data.contact.sectionSubtitle}</span>
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
            <h3>Address</h3>
            <p>{data.contact.address}</p>
            <h3>Contact</h3>
            <p>{data.contact.phone}</p>
            <p>{data.contact.email}</p>
            <iframe title="map" src={data.contact.mapEmbedUrl} loading="lazy" />
          </aside>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <h2>{data.footer.tagline}</h2>
            <p>
              Website profil UMKM ISP dengan Next.js + Sanity CMS. Konten dapat diubah dari
              backoffice.
            </p>
          </div>
          <p>{data.footer.copyright}</p>
        </div>
      </footer>
    </main>
  );
}
