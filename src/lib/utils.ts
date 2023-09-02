import { type ClassValue, clsx } from "clsx";
import type { AssetFile } from "contentful";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const optimise = (assetFile: AssetFile) => {
  const {
    url,
    details: { image }
  } = assetFile;
  let width = image?.width ?? 250;
  width = Math.min(Math.max(width * 0.75, 250), 800);

  return `${url}?fm=jpg&w=${width}`;
};
