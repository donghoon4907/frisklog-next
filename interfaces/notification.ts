import { User } from './user';

export interface Notification {
    id: string;
    content: string;
    url: string;
    createdAt: string;
    readedAt: number;
    from: User;
    to: User;
}
