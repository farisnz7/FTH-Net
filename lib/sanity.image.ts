import imageUrlBuilder from "@sanity/image-url";
import { dataset, projectId } from "./sanity.client";

const builder = imageUrlBuilder({ projectId, dataset });

type ImageSource = Parameters<typeof builder.image>[0];

export const urlFor = (source: ImageSource) => builder.image(source);
