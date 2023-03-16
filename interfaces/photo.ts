import { PhotoType } from '../types/photo';

export interface Photo {
    id: string;
    src: string;
    type: PhotoType;
    createdAt: string;
}
