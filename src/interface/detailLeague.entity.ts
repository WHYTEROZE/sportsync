export interface IDetailLeague {
    id: number;
    type: string;
    name: string;
    selectedSeason: string;
    latestSeason: string;
    shortName: string;
    country: string;
    faqJSONLD: any;
    breadcrumbJSONLD: {
        "@context": string;
        "@type": string;
        itemListElement: Array<{
            "@type": string;
            position: number;
            name: string;
            item: string;
        }>;
    };
    leagueColor: string;
}