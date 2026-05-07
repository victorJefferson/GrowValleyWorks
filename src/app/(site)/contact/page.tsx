import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
    title: {
        absolute: "Contact Us | GrowValley Works"
    },
    description: "Get in touch with the GrowValley team for corporate services, entity management, and operational infrastructure support.",
    openGraph: {
        title: "Contact Us | GrowValley Works",
        description: "Connect with GrowValley Works.",
        url: "https://gv.works/contact",
    },
};

export default function ContactPage() {
    return <ContactContent />;
}
