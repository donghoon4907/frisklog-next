import { PayloadAction } from '..';
import { ActivePostAction } from './active-post';
import { CreatePostAction } from './create-post';
import { DeletePostAction } from './delete-post';
import { LikePostAction } from './like-post';
import { GetPostsAction } from './get-posts';
import { UnlikePostAction } from './unlike-post';
import { UpdatePostAction } from './update-post';

export type PostActionTypes =
    | CreatePostAction
    | UpdatePostAction
    | DeletePostAction
    | LikePostAction
    | UnlikePostAction
    | ActivePostAction
    | GetPostsAction;

export type PostAction = PayloadAction<PostActionTypes>;
