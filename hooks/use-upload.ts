import { useState, ChangeEvent } from 'react';

import { uploadImageRequest } from '../actions/upload/image.action';
import { useMutation } from '../hooks/use-mutation';
import { PhotoType } from '../types/photo';

export const useUpload = (defaultPreview: string, type: PhotoType) => {
    // 업로드 요청 모듈
    const [uploadImage] = useMutation(uploadImageRequest);

    // 프로필사진 미리보기
    const [preview, setPreview] = useState<string>(defaultPreview);

    // 파일 변경 감지 모듈
    const handleChangeFile = async (evt: ChangeEvent<HTMLInputElement>) => {
        const { value, files } = evt.target;
        // 취소 버튼을 누른 경우
        if (!value) {
            return;
        }

        const [file] = files as any;

        const formData = new FormData();

        formData.append('file', file);

        uploadImage(
            {
                formData,
                type,
            },
            (fileName: string) => {
                setPreview(fileName);
            },
        );
    };

    return { preview, handleChangeFile };
};
