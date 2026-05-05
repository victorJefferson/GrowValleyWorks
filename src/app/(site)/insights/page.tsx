import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { features } from "@/config/features";
import { client } from "@/lib/sanity";
import {
    featuredInsightQuery,
    editorsPickQuery,
    latestInsightsQuery,
    allInsightsForIndexQuery,
} from '@/lib/queries';
import InsightsContent from "./InsightsContent";

export const metadata: Metadata = {
    title: {
        absolute: "Insights | GrowValley"
    },
    description: "Perspectives on capital, investment strategy, and portfolio construction from the GrowValley team.",
    openGraph: {
        title: "Insights | GrowValley",
        description: "Perspectives on capital, investment, and portfolio construction.",
        url: "https://gv.ventures/insights",
        images: [
            {
                url: "/images/growValleyVentures.png",
                width: 1200,
                height: 630,
                alt: "GrowValley Insights",
            },
        ],
    },
};

export default async function InsightsPage() {
    if (!features.insights) {
        redirect("/");
    }
    let featured = null;
    let editorsPicks = [];
    let latest = [];
    let allInsights = [];

    try {
        [featured, editorsPicks, latest, allInsights] = await Promise.all([
            client.fetch(featuredInsightQuery),
            client.fetch(editorsPickQuery),
            client.fetch(latestInsightsQuery),
            client.fetch(allInsightsForIndexQuery),
        ]);
    } catch (error) {
        console.error("Error fetching Insights CMS data on Server:", error);
    }

    return (
        <InsightsContent
            featured={featured}
            editorsPicks={editorsPicks || []}
            latest={latest || []}
            allInsights={allInsights || []}
        />
    );
}
