import imageUrlBuilder from "@sanity/image-url";
import { dataset, projectId } from "./sanity.client";

const builder = imageUrlBuilder({ projectId, dataset });

export const urlFor = (source: unknown) => builder.image(source);
