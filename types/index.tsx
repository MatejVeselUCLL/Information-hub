export type Manual = {
    id: number;
    lang: 'en' | 'nl';
    title: string;
    os: "Windows" | "MacOS" | "Linux" | "Android" | "IOS";
    tags: string[];
};