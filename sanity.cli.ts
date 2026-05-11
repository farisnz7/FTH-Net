import { defineCliConfig } from "sanity/cli";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const resolvedProjectId =
  !projectId || projectId === "your_project_id" || projectId === "demo12345"
    ? "6681x3pd"
    : projectId;

export default defineCliConfig({
  api: {
    projectId: resolvedProjectId,
    dataset
  }
});
