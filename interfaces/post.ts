import { PostVisibility } from '../types/visibility';
import { Category } from './category';
import { User } from './user';

export interface Post {
    id: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
    link: string;
    user: User;
    likedCount: number;
    commentCount: number;
    likers: User[];
    isLiked: boolean;
    categories: Category[];
    visibility: PostVisibility;
}
