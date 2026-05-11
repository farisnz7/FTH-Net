import { defineArrayMember, defineField, defineType } from "sanity";

export const page = defineType({
  name: "page",
  title: "Pages",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Page Title",
      type: "string",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "isHome",
      title: "Set as Home Page",
      type: "boolean",
      initialValue: false,
      description: "Enable only for one page."
    }),
    defineField({
      name: "pageDescription",
      title: "Page Description",
      type: "text",
      rows: 3
    }),
    defineField({
      name: "blocks",
      title: "Blocks",
      type: "array",
      of: [
        defineArrayMember({ type: "heroBlock" }),
        defineArrayMember({ type: "featureBlock" }),
        defineArrayMember({ type: "pricingBlock" }),
        defineArrayMember({ type: "coverageBlock" }),
        defineArrayMember({ type: "useCaseBlock" }),
        defineArrayMember({ type: "testimonialBlock" }),
        defineArrayMember({ type: "contactBlock" }),
        defineArrayMember({ type: "contentBlock" }),
        defineArrayMember({ type: "ctaBlock" })
      ],
      validation: (rule) => rule.required().min(1)
    })
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "slug.current",
      isHome: "isHome"
    },
    prepare({ title, subtitle, isHome }) {
      return {
        title: isHome ? `${title} (Home)` : title,
        subtitle
      };
    }
  }
});
