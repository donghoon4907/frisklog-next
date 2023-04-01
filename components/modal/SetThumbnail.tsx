import { Modal } from 'antd';
import { FC, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { updateUserRequest } from '../../actions/user/update-user.action';
import { useInput } from '../../hooks/use-input';
import { useMutation } from '../../hooks/use-mutation';
import { AppState } from '../../reducers';
import { CommonState } from '../../reducers/common';
import { UserState } from '../../reducers/user';
import { PhotoState } from '../../reducers/photo';
import { StateChangerLink } from '../link/link.style';
import { useUpload } from '../../hooks/use-upload';
import { PhotoType } from '../../types/photo';
import { profilePhotosRequest } from '../../actions/photo/profile-photos.action';
import { useQuery } from '../../hooks/use-query';
import { PhotoItem } from '../PhotoItem';
import { mixinBox } from '../theme/mixins';
import { Avatar } from '../avatar';
import { hideThumbnailModal } from '../../actions/switch/thumbnail-modal.action';

const UploadColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
    gap: 5px;

    ${mixinBox}
`;

const UploadedAvatar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const SliderWrapper = styled.div`
    padding-bottom: 30px;

    & .slick-arrow {
        display: none !important;
    }

    border: 1px solid ${({ theme }) => theme.borderColor};
    border-radius: ${({ theme }) => theme.borderRadius};
    background-color: ${({ theme }) => theme.boxBgColor};
`;

const AvatarBody = styled.div`
    padding: 10px;
    border-radius: 4px;
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

export const SetThumbnailModal: FC = () => {
    const dispatch = useDispatch();

    const $file = useRef<HTMLInputElement>(null);

    const { avatar } = useSelector<AppState, UserState>((state) => state.user);

    const { isShowThumbnailModal } = useSelector<AppState, CommonState>(
        (state) => state.common,
    );

    const { profilePhotos } = useSelector<AppState, PhotoState>(
        (state) => state.photo,
    );

    const [getPhotos] = useQuery(profilePhotosRequest);

    const [updateUser] = useMutation(updateUserRequest, { useAuth: true });
    // 별명
    const newNickname = useInput('');

    const [preview, setPreview] = useState(avatar!);
    // 업로드 모듈
    const { handleChangeFile } = useUpload(PhotoType.PROFILE, setPreview);
    // 파일 클릭 핸들러
    const handleClickFile = () => {
        const node = $file.current;

        if (node) {
            node.click();
        }
    };
    // 팝업 닫기 핸들러
    const handleClose = () => {
        dispatch(hideThumbnailModal());
    };
    // 이전 업로드 불러오기 핸들러
    const handleClickPhotos = () => {
        getPhotos({ limit: 5, type: PhotoType.PROFILE });
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
            title="썸네일 변경"
            visible={isShowThumbnailModal}
            onCancel={handleClose}
            onOk={handleOk}
            destroyOnClose
            centered
        >
            <UploadColumn>
                <UploadedAvatar>
                    <AvatarBody>
                        <Avatar
                            src={preview}
                            alt="Avatar"
                            style={{
                                width: 180,
                                height: 180,
                                borderRadius: '50%',
                            }}
                        />
                        <input
                            type="file"
                            onChange={handleChangeFile}
                            ref={$file}
                            hidden
                            accept="image/jpg, image/png"
                        />
                    </AvatarBody>
                    <AvatarMeta>
                        <p>
                            98x98픽셀 이상, 4MB이하의 사진이 권장됩니다. PNG
                            또는 JPG파일을 사용하세요.
                        </p>
                        <StateChangerWrapper>
                            <StateChangerLink onClick={handleClickFile}>
                                업로드
                            </StateChangerLink>
                            <StateChangerLink onClick={handleClickPhotos}>
                                이전 업로드 불러오기
                            </StateChangerLink>
                        </StateChangerWrapper>
                    </AvatarMeta>
                </UploadedAvatar>
                <div style={{ width: '100%' }}>
                    {profilePhotos.map((photos) => (
                        <div key={`profilePhotos${photos.id}`}>
                            <PhotoItem {...photos} setPhoto={setPreview} />
                        </div>
                    ))}
                </div>
            </UploadColumn>
        </Modal>
    );
};
