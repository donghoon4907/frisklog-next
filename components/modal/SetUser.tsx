import { Modal } from 'antd';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { hideUserModal } from '../../actions/switch/user-modal.action';
import { updateUserRequest } from '../../actions/user/update-user.action';
import { useInput } from '../../hooks/use-input';
import { AppState } from '../../reducers';
import { CommonState } from '../../reducers/common';
import { UserState } from '../../reducers/user';
import { FormInput } from '../FormInput';

export const SetUserModal: FC = () => {
    const dispatch = useDispatch();

    const { isShowUserModal } = useSelector<AppState, CommonState>(
        (state) => state.common,
    );

    const { nickname } = useSelector<AppState, UserState>(
        (state) => state.user,
    );
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

        const tf = confirm('입력한 내용으로 수정하시겠어요?');

        if (tf) {
            dispatch(
                updateUserRequest({
                    nickname,
                }),
            );
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
            <FormInput
                placeholder="닉네임을 입력하세요"
                id="setNickname"
                expanded
                {...newNickname}
                autoComplete="off"
                label="닉네임"
            />
        </Modal>
    );
};
