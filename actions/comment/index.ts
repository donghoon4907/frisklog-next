import { CreateCommentAction } from './create-comment.interface';
import { DeleteCommentAction } from './delete-comment.interface';
import { UpdateCommentAction } from './update-comment.interface';

export type CommentAction =
    | CreateCommentAction
    | UpdateCommentAction
    | DeleteCommentAction;
