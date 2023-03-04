import type { ISelectOption } from '../../interfaces/select';
import { PostVisibility } from '../../types/visibility';

export const postVisibilityOptions: ISelectOption[] = [
    {
        label: '공개',
        value: PostVisibility.PUBLIC,
        preview: null,
    },
    {
        label: '비공개',
        value: PostVisibility.PRIVATE,
        preview: null,
    },
];
