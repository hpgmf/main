
import type { Metadata } from "next";

import Navbar from "@/components/home/navbar";
import Marquee from "@/components/home/marquee";
import SiteFooter from "@/components/footer";
import Campus from "@/components/home/campus";

export const metadata: Metadata = {
  title: "Campus Tour | HP Ghosh Memorial Foundation",
  description:
    "Explore the campus of H.P. Ghosh Memorial Medical College in Ambassa, Tripura. Discover the architectural vision, academic spaces, landscaped surroundings, and campus facilities.",
  keywords: [
    "HP Ghosh Memorial Medical College",
    "HP Ghosh Campus",
    "Campus Tour",
    "Medical College Tripura",
    "Ambassa Medical College",
    "Medical Education",
  ],
};

export default function CampusPage() {
  return (
    <>
      <Marquee />
      <Navbar />

      <main className="min-h-screen bg-background">
        <Campus/>
      </main>

      <SiteFooter />
    </>
  );
}
