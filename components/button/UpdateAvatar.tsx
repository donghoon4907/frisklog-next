import { FC } from 'react';

import { Button } from '.';
import { updateUserRequest } from '../../actions/user/update-user.action';
import { useMutation } from '../../hooks/use-mutation';

interface Props {
    avatar: string;
}

export const UpdateAvatarButton: FC<Props> = ({ avatar }) => {
    const [updateAvatar] = useMutation(updateUserRequest, { useAuth: true });

    // 클릭 핸들러
    const handleClick = () => {
        const message = '프로필사진을 변경하시겠어요?';

        const tf = window.confirm(message);

        if (tf) {
            updateAvatar({ avatar }, () => {
                alert('변경되었습니다.');
            });
        }
    };

    return (
        <div title="사진변경 버튼">
            <Button type="button" colorType="primary" onClick={handleClick}>
                <span>사진 변경</span>
            </Button>
        </div>
    );
};
