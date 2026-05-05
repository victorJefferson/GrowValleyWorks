import type { Metadata } from 'next';
import CapabilitiesContent from './CapabilitiesContent';

import { client } from '@/lib/sanity';
import { heroQuery } from '@/lib/queries';

export const metadata: Metadata = {
    title: {
        absolute: "Our Capabilities | GrowValley",
    },
    description: "Expertise that actually matters. Every service we offer exists for one reason, to make sure your money is working as hard as you did to earn it.",
    openGraph: {
        title: "Our Capabilities | GrowValley",
        description: "Explore GrowValley's integrated wealth management and investment capabilities.",
        url: "https://gv.ventures/our-capabilities",
    },
};

export default async function CapabilitiesPage() {
    let heroData = null;
    try {
        heroData = await client.fetch(heroQuery, { pageSlug: "expertise" });
    } catch (err) {
        console.error("Capabilities Hero Fetch Error:", err);
    }

    return <CapabilitiesContent heroData={heroData} />;
}
