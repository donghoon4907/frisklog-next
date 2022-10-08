import { client } from '../graphql/client';
import { RecommendCategoriesRequestPayload } from '../actions/category/recommend-categories.interface';
import { GET_RECOMMEND_CATEGORIES } from '../graphql/query/category/recommend-categories';
import { RelatedCategoriesRequestPayload } from '../actions/category/related-categories.interface';
import { GET_RELATED_CATEGORIES } from '../graphql/query/category/related-categories';

export function getRecommendCategories(
    payload: RecommendCategoriesRequestPayload,
) {
    return client.request(GET_RECOMMEND_CATEGORIES, payload);
}

export function getRelatedCategories(payload: RelatedCategoriesRequestPayload) {
    return client.request(GET_RELATED_CATEGORIES, payload);
}
