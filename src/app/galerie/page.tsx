import type { Metadata } from "next";
import GalleryClient from "@/components/gallery/GalleryClient";

export const metadata: Metadata = {
    title: "Galerie photos | PFP Services",
    description: "Galerie photos des interventions PFP Services : nettoyage de toiture, ramonage, guêpes et frelons, rongeurs, cafards, chenilles et taupes.",
    alternates: { canonical: '/galerie' },
};

export default function GaleriePage() {
    return <GalleryClient />;
}
