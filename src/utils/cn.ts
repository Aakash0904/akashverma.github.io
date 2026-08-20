/**
 * Utility to merge class names conditionally.
 * Lightweight alternative to clsx + tailwind-merge for this project's needs.
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}
