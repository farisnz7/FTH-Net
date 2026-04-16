# FTH Net Web Profile

Website profil modern untuk UMKM ISP **FTH Net** menggunakan **Next.js** pada frontend dan **Sanity CMS** untuk backoffice.

## Fitur
- Landing page modern bertema navy + orange (mewah, simpel, clean).
- Struktur konten meniru referensi: hero, alasan memilih, paket, testimoni, contact section, dan footer.
- Konten dinamis dari Sanity (tidak hardcode), dengan fallback data agar website tetap tampil.
- Backoffice tersedia di route `/studio`.

## Menjalankan
1. Install dependencies
   ```bash
   npm install
   ```
2. Copy env
   ```bash
   cp .env.example .env.local
   ```
3. Jalankan development
   ```bash
   npm run dev
   ```
4. Jalankan backoffice studio
   ```bash
   npm run studio
   ```

## Struktur Sanity
Schema utama: `homePage`
- Hero
- About
- Packages
- Testimonials
- Contact
- Footer

> Catatan: Hero image/logo saat ini memakai sample image sampai aset final diberikan.


## Troubleshooting
Jika saat `npm install` muncul error dependency tree seperti:
- `next-sanity@12.x` butuh `next@^16`
- sedangkan project ini memakai `next@14`

Gunakan versi `next-sanity` yang kompatibel dengan Next 14:
```bash
npm install next-sanity@9.0.2 @sanity/image-url@1.1.0
npm install
```

Jika sebelumnya sempat install yang salah, bersihkan dulu:
```bash
rm -rf node_modules package-lock.json
npm cache verify
npm install
```
