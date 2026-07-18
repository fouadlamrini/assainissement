/**
 * src/utils/cn.js
 * 
 * Utilitaire de fusion de classes Tailwind CSS.
 * Permet de combiner conditionnellement des classes avec 'clsx'
 * tout en résolvant proprement les conflits de priorités Tailwind avec 'tailwind-merge'.
 */

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}