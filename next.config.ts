import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["*.replit.dev", "*.picard.replit.dev"],
  async redirects() {
    return [
      { source: "/nettoyage-toiture/demoussage", destination: "/services/demoussage", permanent: true },
      { source: "/nettoyage-toiture/hydrofuge", destination: "/services/demoussage", permanent: true },
      { source: "/nettoyage-toiture", destination: "/services", permanent: true },
      { source: "/nuisibles/rats-souris", destination: "/services/rongeurs", permanent: true },
      { source: "/nuisibles/guepes-frelons", destination: "/services/guepes-frelons", permanent: true },
      { source: "/nuisibles", destination: "/services", permanent: true },
    ];
  },
};

export default nextConfig;
