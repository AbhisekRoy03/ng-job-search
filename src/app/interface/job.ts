export interface Job {
    id: number;
    title: string;
    companyName: string;
    companyLogo: string;
    types: string[];
    industries: string[];
    reference: string;
    publishDate: string;
    location: string;
    description: string;
    responsibilities: string[];
    favorite: boolean;
}
