import { UserStatusType } from '../types/status';

export interface User {
    id: string;
    nickname: string;
    link: string;
    avatar: string;
    status: UserStatusType;
    statusText: string;
    isMaster: boolean;
    createdAt: string;
    updatedAt: string;
    followerCount?: number;
    postCount?: number;
    isFollowing?: boolean;
    isMe?: boolean;
}
