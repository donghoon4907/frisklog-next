import { FC, useState } from 'react';
import { useSelector } from 'react-redux';

import { AppState } from '../../../reducers';
import { UserState } from '../../../reducers/user';
import { RectangleAvatar } from '../../RectangleAvatar';
import { UploadAvatar } from '../../UploadAvatar';
import { SetNicknameButton } from '../../button/SetNickname';
import { LogoutButton } from '../../button/Logout';
import { UpdateAvatarButton } from '../../button/UpdateAvatar';
import * as StyledUserProfile from './UserProfile.style';

export const AsideUserProfile: FC = () => {
    const { id, avatar, nickname, userPageProfile } = useSelector<
        AppState,
        UserState
    >((state) => state.user);

    const [uploadedFile, setUploadedFile] = useState<string>(
        userPageProfile!.avatar,
    );

    const isMe = id == userPageProfile?.id;

    return (
        <StyledUserProfile.Container>
            <StyledUserProfile.Header>
                {isMe ? (
                    <UploadAvatar
                        defaultPreview={avatar!}
                        setUploadedFile={setUploadedFile}
                    />
                ) : (
                    <RectangleAvatar src={uploadedFile} alt="Avatar" />
                )}
            </StyledUserProfile.Header>
            <StyledUserProfile.Body>
                <StyledUserProfile.Meta>
                    <StyledUserProfile.NicknameWrapper>
                        <StyledUserProfile.NicknameBody>
                            {isMe ? nickname : userPageProfile?.nickname}
                        </StyledUserProfile.NicknameBody>
                    </StyledUserProfile.NicknameWrapper>
                    {isMe && <SetNicknameButton />}
                </StyledUserProfile.Meta>
            </StyledUserProfile.Body>
            {isMe && (
                <StyledUserProfile.Footer>
                    <LogoutButton />
                    <UpdateAvatarButton avatar={uploadedFile} />
                </StyledUserProfile.Footer>
            )}
        </StyledUserProfile.Container>
    );
};
