import type { Metadata } from "next";
import { client } from "@/lib/sanity";
import { heroQuery, insightsQuery, dataSectionQuery } from "@/lib/queries";
import HomeContent from "./HomeContent";

export const metadata: Metadata = {
    title: {
        absolute: "GrowValley",
    },
    description: "A 360° approach to managing your wealth.",
    openGraph: {
        title: "GrowValley",
        description: "Your Wealth. Our Expertise. This Is GrowValley!",
        url: "https://gv.ventures",
        images: [
            {
                url: "/images/growValleyVentures.png",
                width: 1200,
                height: 630,
                alt: "GrowValley",
            },
        ],
    },
};

export default async function Home() {
    let heroData = null;
    let insights = [];

    let dataSectionData = null;

    try {
        [heroData, insights, dataSectionData] = await Promise.all([
            client.fetch(heroQuery, { pageSlug: "home" }),
            client.fetch(insightsQuery),
            client.fetch(dataSectionQuery)
        ]);
    } catch (error) {
        console.error("Error fetching CMS data on Server:", error);
    }

    return (
        <HomeContent
            heroData={heroData}
            insights={insights}
            dataSectionData={dataSectionData}
        />
    );
}
