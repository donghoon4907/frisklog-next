import { PayloadAction } from '..';
import { CreatePostAction } from './create-post';
import { DeletePostAction } from './delete-post';
import { LikePostAction } from './like-post';
import { UnlikePostAction } from './unlike-post';
import { UpdatePostAction } from './update-post';

export type PostActionTypes =
    | CreatePostAction
    | UpdatePostAction
    | DeletePostAction
    | LikePostAction
    | UnlikePostAction;

export type PostAction = PayloadAction<PostActionTypes>;
