// List of main cities covered (for display purposes)
export const mainCities = [
    "Melun", "Fontainebleau", "Dammarie-les-Lys",
    "Moissy-Cramayel", "Combs-la-Ville", "Savigny-le-Temple",
    "Brie-Comte-Robert", "Montereau-Fault-Yonne", "Nemours"
];

// Function to check if a zip code is covered
// PFP Services covers all of 77 and borders of 91/94 close to Cély check
export function checkServiceArea(zipCode: string): { covered: boolean; city?: string } {
    const cleanZip = zipCode.trim();

    // Check format
    if (!/^\d{5}$/.test(cleanZip)) {
        return { covered: false };
    }

    const dept = cleanZip.substring(0, 2);

    // Primary Zone: 77 (Seine-et-Marne) - Fully Covered
    if (dept === "77") {
        return { covered: true, city: "Seine-et-Marne (77)" };
    }

    // Border Zones (Mock logic for now, can be refined)
    // Cély-en-Bière is near 91 (Milly-la-Forêt)
    const specificAllowed = [
        "91490", // Milly-la-Forêt
        "91090", // Lisses
        "91100", // Corbeil
    ];

    if (specificAllowed.includes(cleanZip)) {
        return { covered: true, city: "Zone Limitrophe" };
    }

    return { covered: false };
}
