export const siteConfig = {
  name: "GrowValley Works",
  description: "Company formation, government compliance, accounting, payroll, and international expansion. Handled by one firm.",
  url: "https://gv.works",
  maintenanceMode: process.env.NEXT_PUBLIC_PRODUCTION_ONLINE !== "true", // Maintenance is ON if Production is NOT online
};

export type SiteConfig = typeof siteConfig;
