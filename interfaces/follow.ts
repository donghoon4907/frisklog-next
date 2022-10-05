import { User } from './user';

export interface Follow {
    id: string;
    requestor: User;
    acceptor: User;
}
