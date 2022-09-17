export interface Category {
    id: string;
    content: string;
}

export interface RecommendCategory extends Category {
    postCount: number;
}
