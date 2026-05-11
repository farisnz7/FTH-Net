import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemas";
import { deskStructure } from "./sanity/deskStructure";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const resolvedProjectId =
  !projectId || projectId === "your_project_id" || projectId === "demo12345"
    ? "6681x3pd"
    : projectId;

export default defineConfig({
  name: "default",
  title: "FTH Net Backoffice",
  projectId: resolvedProjectId,
  dataset,
  plugins: [deskTool({ structure: deskStructure }), visionTool()],
  schema: {
    types: schemaTypes
  }
});
