import { Navbar } from "../../components/layout/Navbar";
import { Footer } from "../../components/layout/Footer";
import { TrustGuard } from "trust-guard-js";
import { trustGuardConfig } from "../../trustguard.config";
import { siteConfig } from "../../config/siteConfig";
import { MaintenanceMode } from "../../components/ui/MaintenanceMode";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  if (siteConfig.maintenanceMode) {
    return <MaintenanceMode />;
  }

  return (
    <TrustGuard config={trustGuardConfig}>
      <Navbar />
      <main className="siteWrapper">
        {children}
      </main>
      <Footer />
    </TrustGuard>
  );
}
