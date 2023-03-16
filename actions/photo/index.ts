import { PostPhotosAction } from './post-photos.interface';
import { ProfilePhotosAction } from './profile-photos.interface';

export type PhotoAction = PostPhotosAction | ProfilePhotosAction;
