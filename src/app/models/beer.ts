export class Beer {
    id?: string;
    name?: string;
    tagline?: string;
    description?: string;
    image_url?: string;
    ingredients?: any;

    constructor(option: any) {
    }
}

export class BeerFilter {
    page: number;
    per_page: number;

    constructor(option: any) {
        this.page = option.page || 1;
        this.per_page = option.per_page || 10;
    }
}