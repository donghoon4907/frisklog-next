import type { FC } from 'react';
import { Modal } from 'antd';
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import type { AppState } from '../../reducers';
import type { CommonState } from '../../reducers/common';
import type { UserState } from '../../reducers/user';
import type { PhotoState } from '../../reducers/photo';
import { updateUserRequest } from '../../actions/user/update-user.action';
import { useMutation } from '../../hooks/use-mutation';
import { StateChangerLink } from '../link/link.style';
import { useUpload } from '../../hooks/use-upload';
import { PhotoType } from '../../types/photo';
import { profilePhotosRequest } from '../../actions/photo/profile-photos.action';
import { useLazyQuery } from '../../hooks/use-query';
import { mixinBox } from '../theme/mixins';
import { Avatar } from '../avatar';
import { hideThumbnailModal } from '../../actions/switch/thumbnail-modal.action';
import { Photos } from '../Photos';

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

const PhotosMessage = styled.p`
    position: relative;
    width: 100%;
    text-align: left;
    padding-left: 10px;

    &:before {
        content: '*';
        position: absolute;
        top: 3px;
        left: 0;
        height: 100%;
    }
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

    const [getPhotos] = useLazyQuery(profilePhotosRequest);

    const [updateUser] = useMutation(updateUserRequest, { useAuth: true });

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
        getPhotos({ limit: 8, type: PhotoType.PROFILE });
    };
    // 내 정보 수정 핸들러
    const handleOk = () => {
        const message = '선택한 사진으로 썸네일을 수정하시겠어요?';

        const tf = confirm(message);

        if (tf) {
            updateUser(
                {
                    avatar: preview,
                },
                () => dispatch(hideThumbnailModal()),
            );
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
                            accept="image/jpg, image/JPG, image/png, image/PNG, image/gif, image/GIF"
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
                {profilePhotos.length > 0 && (
                    <>
                        <Photos setPhoto={setPreview} items={profilePhotos} />
                        <PhotosMessage>
                            최근 업로드된 사진 중 최대 8개까지 제공됩니다.
                        </PhotosMessage>
                    </>
                )}
            </UploadColumn>
        </Modal>
    );
};
