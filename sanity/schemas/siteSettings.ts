import { defineArrayMember, defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "siteTitle",
      title: "Site Title",
      type: "string",
      initialValue: "FTH Net"
    }),
    defineField({
      name: "navigation",
      title: "Navigation",
      type: "array",
      of: [defineArrayMember({ type: "navItem" })]
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: {
        hotspot: true
      },
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
          description: "Teks alternatif untuk aksesibilitas dan fallback logo."
        })
      ],
      description: "Upload logo utama website."
    }),
    defineField({
      name: "logoWidth",
      title: "Logo Width",
      type: "number",
      initialValue: 160,
      description: "Lebar logo di header dalam pixel.",
      validation: (Rule) => Rule.min(40).max(320).integer()
    }),
    defineField({
      name: "logoHeight",
      title: "Logo Height",
      type: "number",
      initialValue: 60,
      description: "Tinggi logo di header dalam pixel.",
      validation: (Rule) => Rule.min(24).max(120).integer()
    }),
    defineField({
      name: "contactPhone",
      title: "Contact Phone",
      type: "string"
    }),
    defineField({
      name: "contactEmail",
      title: "Contact Email",
      type: "string"
    }),
    defineField({
      name: "contactAddress",
      title: "Contact Address",
      type: "text",
      rows: 3
    }),
    defineField({
      name: "operationalHours",
      title: "Operational Hours",
      type: "array",
      of: [defineArrayMember({ type: "string" })]
    }),
    defineField({
      name: "footerSocialLinks",
      title: "Footer Social Links",
      type: "array",
      of: [defineArrayMember({ type: "socialLink" })],
      description: "Daftar sosial media yang akan tampil di footer. Pilih platform dan masukkan URL."
    }),
    defineField({
      name: "privacyLink",
      title: "Privacy Link",
      type: "string"
    }),
    defineField({
      name: "termsLink",
      title: "Terms Link",
      type: "string"
    }),
    defineField({
      name: "footerCopyright",
      title: "Footer Copyright",
      type: "string",
      initialValue: "Copyright 2026 FTH Net. All Rights Reserved"
    })
  ],
  preview: {
    prepare: () => ({ title: "Site Settings" })
  }
});
