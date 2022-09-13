import { Category } from './category';
import { User } from './user';

export interface Post {
    id: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    link: string;
    user: User;
    likeCount: number;
    likers: User[];
    categories: Category[];
}

export interface HomePost extends Omit<Post, 'link' | 'updatedAt'> {}
