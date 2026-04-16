import { groq } from "next-sanity";

export const homePageQuery = groq`*[_type == "homePage"][0]{
  hero,
  about,
  packages[]{title,speed,price,features},
  testimonials[]{name,role,message,rating},
  contact,
  footer
}`;
