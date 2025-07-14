export function createPageUrl(page: string): string {
  switch (page) {
    case "Home":
      return "/";
    case "About":
      return "/about";
    case "Updates":
      return "/updates";
    default:
      return "/";
  }
} 