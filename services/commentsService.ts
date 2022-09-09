import { client } from '../graphql/client';
import { CreateCommentRequestPayload } from '../actions/comment/create-comment.interface';
import { MUTATION_CREATE_COMMENT } from '../graphql/mutation/comment/create-comment';
import { UpdateCommentRequestPayload } from '../actions/comment/update-comment.interface';
import { MUTATION_UPDATE_COMMENT } from '../graphql/mutation/comment/update-comment';
import { DeleteCommentRequestPayload } from '../actions/comment/delete-comment.interface';
import { MUTATION_DELETE_COMMENT } from '../graphql/mutation/comment/delete-comment';

export function createComment(payload: CreateCommentRequestPayload) {
    return client.request(MUTATION_CREATE_COMMENT, payload);
}

export function updateComment(payload: UpdateCommentRequestPayload) {
    return client.request(MUTATION_UPDATE_COMMENT, payload);
}

export function deleteComment(payload: DeleteCommentRequestPayload) {
    return client.request(MUTATION_DELETE_COMMENT, payload);
}
