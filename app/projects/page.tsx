import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectsFullList from "@/components/ProjectsFullList";

export const metadata: Metadata = {
  title: "Our Completed Paving Projects & Portfolio | Masakorala Holdings",
  description:
    "Explore our landmark interlocking concrete paving installations across Sri Lanka — industrial logistics warehouses, commercial retail car parks, waterfront promenades, and national highways.",
  openGraph: {
    title: "Paving Projects Portfolio | Masakorala Holdings",
    description:
      "Engineered interlock paving installations delivered to SLS 1425 and RDA standards across Sri Lanka.",
    images: [{ url: "/images/projects/warehouse-hub.jpg" }],
  },
};

export default function ProjectsPage() {
  return (
    <div className="site-wrapper">
      <Header />
      <main id="main-content">
        <ProjectsFullList />
      </main>
      <Footer />
    </div>
  );
}
