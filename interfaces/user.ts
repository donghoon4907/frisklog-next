import { StatusType } from '../types/status';

export interface User {
    id: string;
    nickname: string;
    link: string;
    avatar: string;
    status: StatusType;
    statusText: string;
    isMaster: boolean;
    createdAt: string;
    updatedAt: string;
    followerCount: number;
    postCount: number;
}

export interface RecommendUser extends User {}
