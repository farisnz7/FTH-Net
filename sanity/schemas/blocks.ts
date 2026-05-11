export const socialLink = defineType({
  name: "socialLink",
  title: "Social Link",
  type: "object",
  fields: [
    defineField({
      name: "platform",
      title: "Platform",
      type: "string",
      options: {
        list: [
          { title: "Instagram", value: "instagram" },
          { title: "Facebook", value: "facebook" },
          { title: "TikTok", value: "tiktok" }
        ],
        layout: "dropdown"
      },
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "url",
      title: "URL",
      type: "url",
      validation: (rule) => rule.required()
    })
  ],
  preview: {
    select: { title: "platform", subtitle: "url" }
  }
});
import { defineArrayMember, defineField, defineType } from "sanity";

export const navItem = defineType({
  name: "navItem",
  title: "Navigation Item",
  type: "object",
  fields: [
    defineField({ name: "label", title: "Label", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "href", title: "Link", type: "string", validation: (rule) => rule.required() })
  ],
  preview: {
    select: { title: "label", subtitle: "href" }
  }
});

export const heroBlock = defineType({
  name: "heroBlock",
  title: "Hero Block",
  type: "object",
  fields: [
    defineField({
      name: "slides",
      title: "Hero Slides",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "heroImage", title: "Hero Image", type: "image", options: { hotspot: true } }),
            defineField({ name: "badge", title: "Badge", type: "string" }),
            defineField({ name: "title", title: "Title", type: "string"}),
            defineField({ name: "highlightedTitle", title: "Highlighted Title", type: "string" }),
            defineField({ name: "subtitle", title: "Subtitle", type: "text", rows: 4 }),
            defineField({ name: "ctaLabel", title: "CTA Label", type: "string" }),
            defineField({ name: "ctaLink", title: "CTA Link", type: "string" }),
            defineField({ name: "secondaryCtaLabel", title: "Secondary CTA Label", type: "string" }),
            defineField({ name: "secondaryCtaLink", title: "Secondary CTA Link", type: "string" }),
          ],
          preview: { select: { title: "title", subtitle: "subtitle" } }
        })
      ],
      description: "Isi beberapa slide untuk mengaktifkan slider. Field hero lama di bawah tetap dipakai sebagai fallback."
    }),
    defineField({ name: "autoplay", title: "Auto Play", type: "boolean", initialValue: true }),
    defineField({
      name: "autoplayInterval",
      title: "Auto Play Interval (ms)",
      type: "number",
      initialValue: 6000,
      validation: (rule) => rule.min(2500).max(20000).integer()
    }),
    defineField({ name: "showControls", title: "Show Arrow Controls", type: "boolean", initialValue: true }),
    defineField({ name: "showDots", title: "Show Dot Navigation", type: "boolean", initialValue: true }),
    defineField({ name: "badge", title: "Badge", type: "string" }),
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "highlightedTitle", title: "Highlighted Title", type: "string" }),
    defineField({ name: "subtitle", title: "Subtitle", type: "text", rows: 4 }),
    defineField({ name: "ctaLabel", title: "CTA Label", type: "string" }),
    defineField({ name: "ctaLink", title: "CTA Link", type: "string" }),
    defineField({ name: "secondaryCtaLabel", title: "Secondary CTA Label", type: "string" }),
    defineField({ name: "secondaryCtaLink", title: "Secondary CTA Link", type: "string" }),
    defineField({ name: "heroImage", title: "Hero Image", type: "image", options: { hotspot: true } }),
    defineField({
      name: "features",
      title: "Hero Feature Items",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "description", title: "Description", type: "string" }),
            defineField({
              name: "icon",
              title: "Icon Style",
              type: "string",
              options: {
                list: [
                  { title: "Speed", value: "speed" },
                  { title: "Shield", value: "shield" },
                  { title: "Wifi", value: "wifi" },
                  { title: "Price", value: "price" },
                  { title: "Home", value: "home" },
                  { title: "Business", value: "business" },
                  { title: "Game", value: "game" }
                ]
              }
            })
          ],
          preview: { select: { title: "title", subtitle: "description" } }
        })
      ]
    })
  ],
  preview: {
    prepare: () => ({ title: "Hero Block" })
  }
});

export const featureBlock = defineType({
  name: "featureBlock",
  title: "Feature Block",
  type: "object",
  fields: [
    defineField({ name: "label", title: "Label", type: "string", initialValue: "Why Choose Us" }),
    defineField({ name: "heading", title: "Heading", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "description", title: "Description", type: "text", rows: 4 }),
    defineField({
      name: "highlights",
      title: "Highlights",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      validation: (rule) => rule.required().min(1)
    })
  ],
  preview: {
    select: { title: "heading" },
    prepare: ({ title }) => ({ title: `Feature: ${title || "Untitled"}` })
  }
});

export const pricingPlan = defineType({
  name: "pricingPlan",
  title: "Pricing Plan",
  type: "object",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "speed", title: "Speed", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "price", title: "Price", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "period", title: "Period", type: "string", initialValue: "/bulan" }),
    defineField({ name: "isFeatured", title: "Featured Plan", type: "boolean", initialValue: false }),
    defineField({ name: "badge", title: "Badge", type: "string" }),
    defineField({ name: "buttonLabel", title: "Button Label", type: "string", initialValue: "Pilih Paket" }),
    defineField({ name: "buttonLink", title: "Button Link", type: "string", initialValue: "#contact" }),
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [defineArrayMember({ type: "string" })]
    })
  ],
  preview: {
    select: { title: "title", subtitle: "price" }
  }
});

export const pricingBlock = defineType({
  name: "pricingBlock",
  title: "Pricing Block",
  type: "object",
  fields: [
    defineField({ name: "heading", title: "Heading", type: "string", initialValue: "Our Packages" }),
    defineField({ name: "highlightedHeading", title: "Highlighted Heading", type: "string" }),
    defineField({ name: "allPackagesLabel", title: "All Packages Label", type: "string", initialValue: "Lihat Semua Paket" }),
    defineField({ name: "allPackagesLink", title: "All Packages Link", type: "string", initialValue: "#packages" }),
    defineField({
      name: "plans",
      title: "Plans",
      type: "array",
      of: [defineArrayMember({ type: "pricingPlan" })],
      validation: (rule) => rule.required().min(1)
    })
  ],
  preview: {
    prepare: () => ({ title: "Pricing Block" })
  }
});

export const testimonialItem = defineType({
  name: "testimonialItem",
  title: "Testimonial",
  type: "object",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "role", title: "Role", type: "string" }),
    defineField({ name: "message", title: "Message", type: "text", rows: 4, validation: (rule) => rule.required() }),
    defineField({ name: "rating", title: "Rating", type: "number", initialValue: 5, validation: (rule) => rule.min(1).max(5) }),
    defineField({ name: "avatar", title: "Avatar", type: "image", options: { hotspot: true } })
  ],
  preview: {
    select: { title: "name", subtitle: "role" }
  }
});

export const testimonialBlock = defineType({
  name: "testimonialBlock",
  title: "Testimonial Block",
  type: "object",
  fields: [
    defineField({ name: "heading", title: "Heading", type: "string", initialValue: "What Clients Say" }),
    defineField({ name: "highlightedHeading", title: "Highlighted Heading", type: "string" }),
    defineField({
      name: "items",
      title: "Items",
      type: "array",
      of: [defineArrayMember({ type: "testimonialItem" })],
      validation: (rule) => rule.required().min(1)
    })
  ],
  preview: {
    prepare: () => ({ title: "Testimonial Block" })
  }
});

export const coverageBlock = defineType({
  name: "coverageBlock",
  title: "Coverage Block",
  type: "object",
  fields: [
    defineField({ name: "label", title: "Label", type: "string", initialValue: "Cakupan Wilayah" }),
    defineField({ name: "heading", title: "Heading", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "highlightedHeading", title: "Highlighted Heading", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
    defineField({ name: "buttonLabel", title: "Button Label", type: "string" }),
    defineField({ name: "buttonLink", title: "Button Link", type: "string" }),
    defineField({ name: "mapImage", title: "Coverage Map Image", type: "image", options: { hotspot: true } })
  ],
  preview: {
    select: { title: "heading" },
    prepare: ({ title }) => ({ title: `Coverage: ${title || "Untitled"}` })
  }
});

export const useCaseItem = defineType({
  name: "useCaseItem",
  title: "Use Case Item",
  type: "object",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
    defineField({
      name: "icon",
      title: "Icon Style",
      type: "string",
      options: {
        list: [
          { title: "Home", value: "home" },
          { title: "Business", value: "business" },
          { title: "Game", value: "game" },
          { title: "Wifi", value: "wifi" }
        ]
      }
    }),
    defineField({ name: "image", title: "Illustration Image", type: "image", options: { hotspot: true } })
  ],
  preview: {
    select: { title: "title", subtitle: "description" }
  }
});

export const useCaseBlock = defineType({
  name: "useCaseBlock",
  title: "Use Case Block",
  type: "object",
  fields: [
    defineField({ name: "heading", title: "Heading", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "highlightedHeading", title: "Highlighted Heading", type: "string" }),
    defineField({
      name: "items",
      title: "Items",
      type: "array",
      of: [defineArrayMember({ type: "useCaseItem" })],
      validation: (rule) => rule.required().min(1)
    })
  ],
  preview: {
    prepare: () => ({ title: "Use Case Block" })
  }
});

export const contactBlock = defineType({
  name: "contactBlock",
  title: "Contact Block",
  type: "object",
  fields: [
    defineField({ name: "label", title: "Label", type: "string", initialValue: "Contact Us" }),
    defineField({ name: "sectionTitle", title: "Section Title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "sectionSubtitle", title: "Section Subtitle", type: "string" }),
    defineField({ name: "address", title: "Address", type: "text", rows: 3 }),
    defineField({ name: "phone", title: "Phone", type: "string" }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({ name: "mapEmbedUrl", title: "Map Embed URL", type: "url" })
  ],
  preview: {
    select: { title: "sectionTitle" },
    prepare: ({ title }) => ({ title: `Contact: ${title || "Untitled"}` })
  }
});

export const contentBlock = defineType({
  name: "contentBlock",
  title: "Content Block",
  type: "object",
  fields: [
    defineField({ name: "heading", title: "Heading", type: "string", validation: (rule) => rule.required() }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [defineArrayMember({ type: "block" })]
    })
  ],
  preview: {
    select: { title: "heading" },
    prepare: ({ title }) => ({ title: `Content: ${title || "Untitled"}` })
  }
});

export const ctaBlock = defineType({
  name: "ctaBlock",
  title: "CTA Banner Block",
  type: "object",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "subtitle", title: "Subtitle", type: "text", rows: 3 }),
    defineField({ name: "buttonLabel", title: "Button Label", type: "string" }),
    defineField({ name: "buttonLink", title: "Button Link", type: "string" })
  ],
  preview: {
    select: { title: "title" },
    prepare: ({ title }) => ({ title: `CTA: ${title || "Untitled"}` })
  }
});
