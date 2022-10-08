import { Category } from './category';
import { User } from './user';

export interface Post {
    id: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    link: string;
    user: User;
    likedCount: number;
    commentCount: number;
    likers: User[];
    isLiked: boolean;
    categories: Category[];
}

export interface HomePost extends Post {}

export interface SearchPost extends Post {}

export interface UserPost extends Post {}

export interface FollowingPost extends Post {}
