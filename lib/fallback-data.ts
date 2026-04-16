import { HomePageData } from "./types";

export const fallbackHomePageData: HomePageData = {
  hero: {
    badge: "Internet Cepat Untuk Rumah & Bisnis",
    title: "FTH Net — Solusi Internet Premium dan Stabil untuk UMKM",
    subtitle:
      "Nikmati koneksi fiber modern dengan instalasi cepat, dukungan teknis responsif, dan paket fleksibel sesuai kebutuhan usaha Anda.",
    ctaLabel: "Konsultasi Sekarang",
    ctaLink: "#contact"
  },
  about: {
    heading: "Building Trust, Delivering Excellence",
    description:
      "FTH Net hadir untuk membantu UMKM tumbuh dengan koneksi internet berkualitas tinggi, latency rendah, dan layanan profesional.",
    highlights: [
      "100% Fiber Optic Network",
      "Support Teknis 24/7",
      "SLA untuk Pelanggan Bisnis",
      "Monitoring Real-time"
    ]
  },
  packages: [
    {
      title: "Starter Office",
      speed: "50 Mbps",
      price: "Rp299.000/bulan",
      features: ["Unlimited Kuota", "Gratis Router", "Instalasi Cepat"]
    },
    {
      title: "Growth Pro",
      speed: "100 Mbps",
      price: "Rp499.000/bulan",
      features: ["Prioritas Bandwidth", "IP Static Opsional", "Support Prioritas"]
    },
    {
      title: "Enterprise Plus",
      speed: "300 Mbps",
      price: "Rp1.250.000/bulan",
      features: ["SLA 99.5%", "Monitoring Dedicated", "Konsultasi IT Infrastruktur"]
    }
  ],
  testimonials: [
    {
      name: "Rizky A.",
      role: "Pemilik Kafe",
      message: "Sejak pakai FTH Net, transaksi POS dan Wi-Fi pelanggan jauh lebih stabil.",
      rating: 5
    },
    {
      name: "Dina S.",
      role: "Manajer Operasional",
      message: "Team support responsif, cocok buat kantor kami yang mengandalkan meeting online.",
      rating: 5
    }
  ],
  contact: {
    sectionTitle: "Have a Project Idea?",
    sectionSubtitle: "Let's Talk!",
    address: "Jl. Contoh Raya No. 24, Jakarta Selatan",
    phone: "+62 812-3456-7890",
    email: "halo@fthnet.id",
    mapEmbedUrl: "https://maps.google.com/maps?q=jakarta&t=&z=11&ie=UTF8&iwloc=&output=embed"
  },
  footer: {
    tagline: "Let's Connect there",
    copyright: "Copyright © 2026 FTH Net. All Rights Reserved"
  }
};
