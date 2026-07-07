import type { Metadata } from "next";
import { client } from "@/lib/sanity";
import { heroQuery, insightsQuery, dataSectionQuery, whoWeWorkWithQuery, solutionsQuery, homePageQuery } from "@/lib/queries";
import HomeContent from "./HomeContent";

export const revalidate = 0;

export const metadata: Metadata = {
    title: {
        absolute: "GrowValley Works | Company Formation & Corporate Operations",
    },
    description: "GrowValley Works is the operational backbone for serious businesses. We handle company formation, government compliance, accounting, payroll, and international expansion.",
    keywords: ["GrowValley Works", "GV Works", "GrowValleyWorks", "GVWorks", "Company Formation UAE", "Corporate Structuring", "Business Compliance", "PRO Services", "Accounting UAE", "Payroll UAE"],
    openGraph: {
        title: "GrowValley Works | Company Formation & Corporate Operations",
        description: "Your business operations. Handled by one firm. Company formation, compliance, accounting, and payroll.",
        url: "https://gv.works",
        images: [
            {
                url: "/images/growvalleyworks.png",
                width: 1200,
                height: 630,
                alt: "GrowValley Works",
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
