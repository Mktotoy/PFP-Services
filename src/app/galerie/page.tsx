import type { Metadata } from "next";
import GalleryClient from "@/components/gallery/GalleryClient";

export const metadata: Metadata = {
    title: "Galerie Photo Interventions 77 | PFP Services",
    description: "Galerie photo des interventions PFP Services en Seine-et-Marne : dératisation, nids de guêpes et frelons, chenilles, ramonage et démoussage de toiture.",
    alternates: { canonical: '/galerie' },
};

export default function GaleriePage() {
    return <GalleryClient />;
}
