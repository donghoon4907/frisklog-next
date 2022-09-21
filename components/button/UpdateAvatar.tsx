import { FC } from 'react';
import { useDispatch } from 'react-redux';

import { Button } from '.';
import { updateUserRequest } from '../../actions/user/update-user.action';

interface Props {
    avatar: string;
}

export const UpdateAvatarButton: FC<Props> = ({ avatar }) => {
    const dispatch = useDispatch();

    // 클릭 핸들러
    const handleClick = () => {
        const tf = window.confirm('프로필사진을 변경하시겠어요?');

        if (tf) {
            dispatch(
                updateUserRequest({
                    avatar,
                }),
            );
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
