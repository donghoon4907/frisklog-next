export interface Category {
    id: string;
    content: string;
    postCount: number;
}

export interface RecommendCategory extends Category {}

export interface RelatedCategory
    extends Pick<Category, 'content' | 'postCount'> {}
