import { createClient } from "next-sanity";

export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-01-01";

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

const envProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const projectId =
  !envProjectId || envProjectId === "your_project_id" || envProjectId === "demo12345"
    ? "6681x3pd"
    : envProjectId;

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false
});
