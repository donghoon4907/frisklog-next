import { client } from '../graphql/client';
import { CreatePostRequestPayload } from '../actions/post/create-post.interface';
import { MUTATION_CREATE_POST } from '../graphql/mutation/post/create-post';
import { UpdatePostRequestPayload } from '../actions/post/update-post.interface';
import { MUTATION_UPDATE_POST } from '../graphql/mutation/post/update-post';
import { DeletePostRequestPayload } from '../actions/post/delete-post.interface';
import { MUTATION_DELETE_POST } from '../graphql/mutation/post/delete-post';
import { LikePostRequestPayload } from '../actions/post/like-post.interface';
import { MUTATION_LIKE_POST } from '../graphql/mutation/post/like-post';
import { UnlikePostRequestPayload } from '../actions/post/unlike-post.interface';
import { MUTATION_UNLIKE_POST } from '../graphql/mutation/post/unlike-post';
import { GET_POSTS } from '../graphql/query/post/posts';
import { GetPostsRequestPayload } from '../actions/post/get-posts.interface';

export function createPost(payload: CreatePostRequestPayload) {
    return client.request(MUTATION_CREATE_POST, payload);
}

export function updatePost(payload: UpdatePostRequestPayload) {
    return client.request(MUTATION_UPDATE_POST, payload);
}

export function deletePost(payload: DeletePostRequestPayload) {
    return client.request(MUTATION_DELETE_POST, payload);
}

export function likePost(payload: LikePostRequestPayload) {
    return client.request(MUTATION_LIKE_POST, payload);
}

export function unlikePost(payload: UnlikePostRequestPayload) {
    return client.request(MUTATION_UNLIKE_POST, payload);
}

export function getPosts(payload: GetPostsRequestPayload) {
    return client.request(GET_POSTS, payload);
}
