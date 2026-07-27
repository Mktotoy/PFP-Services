// List of main cities covered (for display purposes)
export const mainCities = [
    "Melun", "Fontainebleau", "Dammarie-les-Lys",
    "Moissy-Cramayel", "Combs-la-Ville", "Savigny-le-Temple",
    "Brie-Comte-Robert", "Montereau-Fault-Yonne", "Nemours"
];

// Departements couverts, alignes sur les pages /zones (77, 91, 89, 45 + Fontainebleau)
const COVERED_DEPARTMENTS: Record<string, string> = {
    "77": "Seine-et-Marne (77)",
    "91": "Essonne (91)",
    "89": "Yonne (89)",
    "45": "Loiret (45)",
};

// Function to check if a zip code is covered
export function checkServiceArea(zipCode: string): { covered: boolean; city?: string } {
    const cleanZip = zipCode.trim();

    // Check format
    if (!/^\d{5}$/.test(cleanZip)) {
        return { covered: false };
    }

    const dept = cleanZip.substring(0, 2);
    const label = COVERED_DEPARTMENTS[dept];

    if (label) {
        return { covered: true, city: label };
    }

    return { covered: false };
}
