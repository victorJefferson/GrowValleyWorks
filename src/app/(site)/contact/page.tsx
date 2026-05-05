import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
    title: {
        absolute: "CONTACT | GrowValley"
    },
    description: "Get in touch with the GrowValley team for institutional partnership enquiries, direct portfolio investment, and capital governance advisory.",
    openGraph: {
        title: "CONTACT | GrowValley",
        description: "Connect with GrowValley.",
        url: "https://gv.ventures/contact",
    },
};

export default function ContactPage() {
    return <ContactContent />;
}
