import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isValidUrl(str: string) {
  try {
    new URL(str);
    return true;
  } catch {
    return false;
  }
}
export function getValidImages(images: (string | null | undefined)[]) {
  if (!images) return [];

  return images.filter((img) => {
    if (!img || typeof img !== "string") return false;
    img = img.trim();
    if (img === "" || img === "{}" || img === "null") return false;
    if (!/\.(jpg|jpeg|png|webp|gif|svg)$/i.test(img)) return false;
    if (!isValidUrl(img)) return false;
    return true;
  });
}
