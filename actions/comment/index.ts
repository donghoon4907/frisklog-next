import { CreateCommentAction } from './create-comment.interface';
import { DeleteCommentAction } from './delete-comment.interface';
import { PostCommentsAction } from './post-comments.interface';
import { UpdateCommentAction } from './update-comment.interface';

export type CommentAction =
    | CreateCommentAction
    | UpdateCommentAction
    | DeleteCommentAction;
