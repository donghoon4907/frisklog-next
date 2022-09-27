import { User } from './user';

export interface Comment {
    id: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    user: User;
}
