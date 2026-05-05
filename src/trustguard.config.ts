import { TrustGuardConfig } from "trust-guard-js";

export const trustGuardConfig: TrustGuardConfig = {
  active: true, // Toggle the entire system
  branding: {
    name: "GrowValley",
    logo: "/gv-logo-green.png", // Using neutral black logo to match green theme
    colors: {
      primary: "#163224", // Institutional Green
      text: "#111827",
      background: "#FFFFFF",
    },
  },
  categories: {
    necessary: {
      id: "necessary",
      title: "Necessary",
      description: "Required for the site to function properly. These cookies ensure basic functionality and security features of the website, anonymously.",
      isAlwaysEnabled: true,
    },
  },
  links: {
    privacyPolicy: "/privacy-policy",
    cookiePolicy: "/cookie-policy",
    aboutText: "This website uses cookies to improve your experience. We'll assume you're ok with this, but you can opt-out if you wish.",
  },
  audit: {
    enabled: true,
    endpoint: "/api/consent", // This calls your internal API route
  },
  debug: true, // Logs to console in development
};
