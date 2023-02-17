import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { AppState } from '../../../reducers';
import { UserState } from '../../../reducers/user';
import { RectangleAvatar } from '../../RectangleAvatar';
import { UploadAvatar } from '../../UploadAvatar';
import { SetNicknameButton } from '../../button/SetNickname';
import { LogoutButton } from '../../button/Logout';
import { UpdateAvatarButton } from '../../button/UpdateAvatar';
import * as StyledUserProfile from './UserProfile.style';
import { FollowButton } from '../../button/Follow';
import { User } from '../../../interfaces/user';

interface Props {
    user: Pick<User, 'id' | 'nickname' | 'avatar' | 'isFollowing'>;
}

export const AsideUserProfile: FC<Props> = ({ user }) => {
    const { id } = useSelector<AppState, UserState>((state) => state.user);

    const [uploadedFile, setUploadedFile] = useState('');

    const isMe = id === user.id;

    useEffect(() => {
        if (user) {
            setUploadedFile(user.avatar);
        }
    }, [user]);

    return (
        <StyledUserProfile.Container>
            <StyledUserProfile.Header>
                {isMe ? (
                    <UploadAvatar
                        defaultPreview={uploadedFile}
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
                            {user.nickname}
                        </StyledUserProfile.NicknameBody>
                    </StyledUserProfile.NicknameWrapper>
                    {isMe ? (
                        <SetNicknameButton />
                    ) : (
                        <div style={{ width: 100 }}>
                            <FollowButton
                                userId={user.id}
                                defaultIsFollowing={user.isFollowing}
                            />
                        </div>
                    )}
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
