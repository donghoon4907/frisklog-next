import { Modal } from 'antd';
import { FC, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

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
import { StateChangerLink } from '../link/link.style';
import { useUpload } from '../../hooks/use-upload';
import { PhotoType } from '../../types/photo';

const AvatarWrapper = styled.div`
    width: 180px;
    height: 180px;
    background-color: ${({ theme }) => theme.dividerColor};
    padding: 10px;
    borderradius: 4px;
`;

const AvatarMeta = styled.div`
    flex: 1;
    padding: 5px;
    margin-left: 5px;

    & > * {
        margin-bottom: 5px;
    }
`;

const StateChangerWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const SetUserModal: FC = () => {
    const dispatch = useDispatch();

    const $file = useRef<HTMLInputElement>(null);

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
    // 업로드 모듈
    const { preview, handleChangeFile } = useUpload(avatar!, PhotoType.PROFILE);
    // 파일 클릭 핸들러
    const handleClickFile = () => {
        const node = $file.current;

        if (node) {
            node.click();
        }
    };
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
                <AvatarWrapper>
                    <CircleAvatar src={preview} alt="Avatar" />
                    <input
                        type="file"
                        onChange={handleChangeFile}
                        ref={$file}
                        hidden
                        accept="image/jpg, image/png"
                    />
                </AvatarWrapper>
                <AvatarMeta>
                    <p>
                        98x98픽셀 이상, 4MB이하의 사진이 권장됩니다. PNG 또는
                        JPG파일을 사용하세요.
                    </p>
                    <StateChangerWrapper>
                        <StateChangerLink onClick={handleClickFile}>
                            업로드
                        </StateChangerLink>
                        <StateChangerLink>
                            이전 업로드 불러오기
                        </StateChangerLink>
                    </StateChangerWrapper>
                </AvatarMeta>
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
