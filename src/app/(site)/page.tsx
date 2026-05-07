import type { Metadata } from "next";
import { client } from "@/lib/sanity";
import { heroQuery, insightsQuery, dataSectionQuery, whoWeWorkWithQuery, solutionsQuery, homePageQuery } from "@/lib/queries";
import HomeContent from "./HomeContent";

export const revalidate = 0;

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
    let whoWeWorkWithData = null;
    let solutionsData = null;
    let homePageSettings = null;

    try {
        [heroData, insights, dataSectionData, whoWeWorkWithData, solutionsData, homePageSettings] = await Promise.all([
            client.fetch(heroQuery, { pageSlug: "home" }),
            client.fetch(insightsQuery),
            client.fetch(dataSectionQuery),
            client.fetch(whoWeWorkWithQuery),
            client.fetch(solutionsQuery),
            client.fetch(homePageQuery)
        ]);
    } catch (error) {
        console.error("Error fetching CMS data on Server:", error);
    }

    return (
        <HomeContent
            heroData={heroData}
            insights={insights}
            dataSectionData={dataSectionData}
            whoWeWorkWithData={whoWeWorkWithData}
            solutionsData={solutionsData}
            homePageSettings={homePageSettings}
        />
    );
}
