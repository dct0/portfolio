import { type EntryFieldTypes } from "contentful";

export interface Project {
  contentTypeId: "project";
  fields: {
    slug: EntryFieldTypes.Text;
    title: EntryFieldTypes.Text;
    description: EntryFieldTypes.RichText;
    image?: EntryFieldTypes.AssetLink;
    options?: EntryFieldTypes.Object;
  };
}

export interface ProjectOptions {
  size?: "sm" | "md" | "lg" | "full";
  colour?: "string";
}
