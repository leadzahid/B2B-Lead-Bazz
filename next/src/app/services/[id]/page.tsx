import DataEnrichmentLead from "@/components/about services/DataEnrichmentLead";
import EcommerceLead from "@/components/about services/EcommerceLead";
import InfluencerLead from "@/components/about services/InfluencerLead";
import LeadGeneration from "@/components/about services/LeadGeneration";
import VirtualAssistantLead from "@/components/about services/VirtualAssistantLead";
import WebResearchLead from "@/components/about services/WebResearchLead";
import Loading from "@/components/Loading";
import { Suspense } from "react";
// Removed unused import for PageProps

export async function generateStaticParams() {
  const services = [
    "Lead-Generation",
    "E-commerce-leads",
    "Influencer-Leads",
    "Data-Enrichment",
    "Virtual-Assistant",
    "Web-Research",
  ];

  return services.map((service) => ({
    id: service,
  }));
}

interface ServicePageProps {
  params: Promise<{ id: string }>;
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { id: slug } = await params;

  return (
    <Suspense fallback={<Loading />}>
      {slug === "Lead-Generation" && <LeadGeneration />}
      {slug === "E-commerce-leads" && <EcommerceLead />}
      {slug === "Influencer-Leads" && <InfluencerLead />}
      {slug === "Data-Enrichment" && <DataEnrichmentLead />}
      {slug === "Virtual-Assistant" && <VirtualAssistantLead />}
      {slug === "Web-Research" && <WebResearchLead />}
    </Suspense>
  );
}
