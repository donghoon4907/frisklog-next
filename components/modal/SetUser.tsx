import { Modal } from 'antd';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { hideUserModal } from '../../actions/switch/user-modal.action';
import { updateUserRequest } from '../../actions/user/update-user.action';
import { useInput } from '../../hooks/use-input';
import { useMutation } from '../../hooks/use-mutation';
import { AppState } from '../../reducers';
import { CommonState } from '../../reducers/common';
import { FormInput } from '../FormInput';
import { FormColumn, FormUploadAvatarColumn } from '../form/form.style';
import { CircleAvatar } from '../CircleAvatar';
import { UserState } from '../../reducers/user';
import { PhotoState } from '../../reducers/photo';

export const SetUserModal: FC = () => {
    const dispatch = useDispatch();

    const { avatar } = useSelector<AppState, UserState>((state) => state.user);

    const { isShowUserModal } = useSelector<AppState, CommonState>(
        (state) => state.common,
    );

    const { profilePhotos } = useSelector<AppState, PhotoState>(
        (state) => state.photo,
    );

    const [updateUser] = useMutation(updateUserRequest, { useAuth: true });
    // 별명
    const newNickname = useInput('');
    // 팝업 닫기 핸들러
    const handleClose = () => {
        dispatch(hideUserModal());
    };
    // 내 정보 수정 핸들러
    const handleOk = () => {
        const nickname = newNickname.value;

        if (nickname.length > 9) {
            return alert('별명은 10자 미만으로 입력 해주세요.');
        }

        const message = '입력한 내용으로 수정하시겠어요?';

        const tf = confirm(message);

        if (tf) {
            updateUser({
                nickname,
            });
        }
    };

    return (
        <Modal
            title="사용자 정보 수정"
            visible={isShowUserModal}
            onCancel={handleClose}
            onOk={handleOk}
            destroyOnClose
            centered
        >
            <FormUploadAvatarColumn>
                <CircleAvatar src={avatar!} alt="Avatar" />
            </FormUploadAvatarColumn>
            <FormColumn>
                {/* <Slick> */}
                {/* {profilePhotos.map((user) => (
                        
                    ))} */}
                {/* </Slick> */}
            </FormColumn>

            <FormColumn>
                <FormInput
                    placeholder="닉네임을 입력하세요"
                    id="setNickname"
                    expanded
                    {...newNickname}
                    autoComplete="off"
                    label="닉네임"
                />
            </FormColumn>
        </Modal>
    );
};
