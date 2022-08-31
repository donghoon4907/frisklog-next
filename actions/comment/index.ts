import { PayloadAction } from '..';
import { CreateCommentAction } from './create-comment';
import { DeleteCommentAction } from './delete-comment';
import { UpdateCommentAction } from './update-comment';

export type CommentActionTypes =
    | CreateCommentAction
    | UpdateCommentAction
    | DeleteCommentAction;

export type CommentAction = PayloadAction<CommentActionTypes>;
