import { defineField, defineType } from "sanity";

export const homePage = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    defineField({
      name: "hero",
      title: "Hero",
      type: "object",
      fields: [
        defineField({ name: "badge", type: "string" }),
        defineField({ name: "title", type: "string" }),
        defineField({ name: "subtitle", type: "text" }),
        defineField({ name: "ctaLabel", type: "string" }),
        defineField({ name: "ctaLink", type: "string" }),
        defineField({ name: "heroImage", type: "image" })
      ]
    }),
    defineField({
      name: "about",
      title: "About",
      type: "object",
      fields: [
        defineField({ name: "heading", type: "string" }),
        defineField({ name: "description", type: "text" }),
        defineField({ name: "highlights", type: "array", of: [{ type: "string" }] })
      ]
    }),
    defineField({
      name: "packages",
      title: "Packages",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "title", type: "string" }),
            defineField({ name: "speed", type: "string" }),
            defineField({ name: "price", type: "string" }),
            defineField({ name: "features", type: "array", of: [{ type: "string" }] })
          ]
        }
      ]
    }),
    defineField({
      name: "testimonials",
      title: "Testimonials",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "name", type: "string" }),
            defineField({ name: "role", type: "string" }),
            defineField({ name: "message", type: "text" }),
            defineField({ name: "rating", type: "number", initialValue: 5 })
          ]
        }
      ]
    }),
    defineField({
      name: "contact",
      title: "Contact",
      type: "object",
      fields: [
        defineField({ name: "sectionTitle", type: "string" }),
        defineField({ name: "sectionSubtitle", type: "string" }),
        defineField({ name: "address", type: "text" }),
        defineField({ name: "phone", type: "string" }),
        defineField({ name: "email", type: "string" }),
        defineField({ name: "mapEmbedUrl", type: "url" })
      ]
    }),
    defineField({
      name: "footer",
      title: "Footer",
      type: "object",
      fields: [
        defineField({ name: "tagline", type: "string" }),
        defineField({ name: "copyright", type: "string" })
      ]
    })
  ]
});
