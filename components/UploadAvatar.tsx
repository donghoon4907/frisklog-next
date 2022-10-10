import {
    useState,
    useRef,
    FC,
    Dispatch,
    SetStateAction,
    ChangeEvent,
    useEffect,
} from 'react';
import { useDispatch } from 'react-redux';

import { uploadImageRequest } from '../actions/upload/image.action';
import { UploadAvatarContainer } from './Avatar.style';
import { RectangleAvatar } from './RectangleAvatar';

interface Props {
    defaultPreview: string;
    setUploadedFile: Dispatch<SetStateAction<string>>;
}

export const UploadAvatar: FC<Props> = ({
    defaultPreview,
    setUploadedFile,
}) => {
    const dispatch = useDispatch();

    const $file = useRef<HTMLInputElement>(null);
    // 프로필사진 미리보기
    const [preview, setPreview] = useState<string>('');
    // 파일 클릭 핸들러
    const handleClick = () => {
        const node = $file.current;

        if (node) {
            node.click();
        }
    };
    // 파일 변경 핸들러
    const handleChange = async (evt: ChangeEvent<HTMLInputElement>) => {
        const { value, files } = evt.target;
        // 취소 버튼을 누른 경우
        if (!value) {
            return;
        }

        const [file] = files as any;

        const formData = new FormData();

        formData.append('file', file);

        dispatch(
            uploadImageRequest({
                formData,
                callbackFunc: (fileName: string) => {
                    const path = `${process.env.BACKEND_ROOT}/${fileName}`;

                    const reader = new FileReader();

                    reader.onloadend = () => {
                        // 미리보기 상태 변경
                        setPreview(reader.result as string);
                        // 업로드된 파일 상태 변경
                        setUploadedFile(path);
                    };

                    reader.readAsDataURL(file);
                },
            }),
        );
    };

    useEffect(() => {
        setPreview(defaultPreview);
    }, [defaultPreview]);

    return (
        <UploadAvatarContainer
            type="button"
            onClick={handleClick}
            aria-label="프로필사진 업로드"
        >
            <RectangleAvatar src={preview} alt="Avatar" showBg />
            <input
                type="file"
                onChange={handleChange}
                ref={$file}
                hidden
                accept="image/jpg, image/jpeg, image/png, .gif"
            />
        </UploadAvatarContainer>
    );
};
