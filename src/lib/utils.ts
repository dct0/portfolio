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

/**
 * Convert non-6-digit hex color to 6-digit with the character `#` stripped.
 * Courtesy of https://github.com/simple-icons/simple-icons/blob/develop/sdk.mjs#L173
 * @param {string} text The color text
 * @returns {string} The color text in 6-digit hex format
 */
export const normalizeColor = (text: string): string => {
  let color = text.replace("#", "").toUpperCase();
  if (color.length < 6) {
    color = [...color.slice(0, 3)].map((x) => x.repeat(2)).join("");
  } else if (color.length > 6) {
    color = color.slice(0, 6);
  }
  return color;
};
