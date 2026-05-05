import type { Metadata } from 'next';
import CookiePolicyContent from './CookiePolicyContent';

export const metadata: Metadata = {
    title: {
        absolute: "Cookie Policy | GrowValley"
    },
    description: "GrowValley uses cookies to improve your experience and provide institutional transparency. Read our detailed disclosure regarding digital privacy.",
    openGraph: {
        title: "Cookie Policy | GrowValley",
        description: "GrowValley uses cookies to improve your experience and provide institutional transparency.",
        url: "https://gv.works/cookie-policy",
    },
};

export default function CookiePolicyPage() {
    return <CookiePolicyContent />;
}
