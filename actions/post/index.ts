import { ActivePostAction } from './active-post.interface';
import { CreatePostAction } from './create-post.interface';
import { DeletePostAction } from './delete-post.interface';
import { GetPostsAction } from './get-posts.interface';
import { LikePostAction } from './like-post.interface';
import { UnlikePostAction } from './unlike-post.interface';
import { UpdatePostAction } from './update-post.interface';

export type PostAction =
    | CreatePostAction
    | UpdatePostAction
    | DeletePostAction
    | LikePostAction
    | UnlikePostAction
    | ActivePostAction
    | GetPostsAction;
