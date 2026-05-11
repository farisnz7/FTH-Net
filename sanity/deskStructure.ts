import { StructureResolver } from "sanity/desk";

export const deskStructure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Pages")
        .child(
          S.documentTypeList("page")
            .title("Pages")
            .defaultOrdering([{ field: "isHome", direction: "desc" }])
        ),
      S.divider(),
      S.listItem()
        .title("Site Settings")
        .child(
          S.document()
            .schemaType("siteSettings")
            .documentId("siteSettings")
            .title("Site Settings")
        )
    ]);

