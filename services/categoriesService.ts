import { client } from '../graphql/client';
import { RecommendCategoriesRequestPayload } from '../actions/category/recommend-categories.interface';
import { GET_RECOMMEND_CATEGORIES } from '../graphql/query/category/recommend-categories';

export function getRecommendCategories(
    payload: RecommendCategoriesRequestPayload,
) {
    return client.request(GET_RECOMMEND_CATEGORIES, payload);
}
