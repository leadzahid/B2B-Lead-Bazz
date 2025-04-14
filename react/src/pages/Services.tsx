import { Suspense } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import DataEnrichmentLead from "../components/about services/DataEnrichmentLead";
import EcommerceLead from "../components/about services/EcommerceLead";
import InfluencerLead from "../components/about services/InfluencerLead";
import LeadGeneration from "../components/about services/LeadGeneration";
import VirtualAssistantLead from "../components/about services/VirtualAssistantLead";
import WebResearchLead from "../components/about services/WebResearchLead";

export default function Services() {
  const { id: slug } = useParams();

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
