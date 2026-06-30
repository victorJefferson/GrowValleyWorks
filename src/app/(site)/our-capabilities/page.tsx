import type { Metadata } from 'next';
import CapabilitiesContent from './CapabilitiesContent';

import { client } from '@/lib/sanity';
import { heroQuery, capabilitiesPageQuery, solutionsQuery, whoWeWorkWithQuery } from '@/lib/queries';

export const revalidate = 60;

export const metadata: Metadata = {
    title: {
        absolute: "Our Capabilities | GrowValley Works",
    },
    description: "Expertise that actually matters. Every service we offer exists for one reason, to make sure your business runs properly.",
    openGraph: {
        title: "Our Capabilities | GrowValley Works",
        description: "Explore GrowValley's integrated corporate capabilities.",
        url: "https://gv.works/our-capabilities",
    },
};

export default async function CapabilitiesPage() {
    let heroData = null;
    let capabilitiesPageSettings = null;
    let solutionsData = null;
    let whoWeWorkWithData = null;

    try {
        [heroData, capabilitiesPageSettings, solutionsData, whoWeWorkWithData] = await Promise.all([
            client.fetch(heroQuery, { pageSlug: "expertise" }),
            client.fetch(capabilitiesPageQuery),
            client.fetch(solutionsQuery),
            client.fetch(whoWeWorkWithQuery)
        ]);
    } catch (err) {
        console.error("Capabilities Data Fetch Error:", err);
    }

    return (
        <CapabilitiesContent 
            heroData={heroData} 
            capabilitiesPageSettings={capabilitiesPageSettings}
            solutionsData={solutionsData}
            whoWeWorkWithData={whoWeWorkWithData}
        />
    );
}
