import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { AppState } from '../../../reducers';
import { UserState } from '../../../reducers/user';
import { UserSettingButton } from '../../button/UserSetting';
import { LogoutButton } from '../../button/Logout';
import { FollowButton } from '../../button/Follow';
import { User } from '../../../interfaces/user';
import { Avatar } from '../../avatar';
import { mixinBox, mixinEllipsis } from '../../theme/mixins';
import { showThumbnailModal } from '../../../actions/switch/thumbnail-modal.action';
import { useMutation } from '../../../hooks/use-mutation';

const Container = styled.div`
    position: relative;
    margin-bottom: 5px;

    ${mixinBox}
`;

const Header = styled.div`
    position: relative;
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
`;

const Body = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5px;
    width: 100%;
`;

const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
    margin-top: 16px;
    padding: 5px;

    & > div {
        flex: 1;
    }
`;

const Meta = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > div:nth-child(1) {
        flex: 1;
    }
`;

const NicknameWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    line-height: 1;
    flex-direction: row;
    flex-grow: 1;
    font-size: 1.5rem;
    font-weight: 700;
    height: 100%;
    overflow: hidden;
`;

const Nickname = styled.span`
    margin-left: 5px;
    margin-right: 5px;
    line-height: 1.5;

    ${mixinEllipsis}
`;

interface Props {
    user: Pick<User, 'id' | 'nickname' | 'avatar' | 'isFollowing'>;
}

export const AsideUserProfile: FC<Props> = ({ user }) => {
    const { id } = useSelector<AppState, UserState>((state) => state.user);

    const [showModal] = useMutation(showThumbnailModal, { useAuth: true });

    const [uploadedFile, setUploadedFile] = useState('');

    const isMe = id === user.id;

    const handleClickAvatar = () => {
        showModal();
    };

    useEffect(() => {
        if (user) {
            setUploadedFile(user.avatar);
        }
    }, [user]);

    return (
        <Container>
            <Header>
                <Avatar
                    src={uploadedFile}
                    alt="Avatar"
                    style={{ width: 180, height: 180, borderRadius: '50%' }}
                    role={isMe ? 'button' : ''}
                    onClick={handleClickAvatar}
                />
            </Header>
            <Body>
                <Meta>
                    <NicknameWrapper>
                        <Nickname>{user.nickname}</Nickname>
                    </NicknameWrapper>
                    {!isMe && (
                        <div style={{ width: 100 }}>
                            <FollowButton
                                userId={user.id}
                                defaultIsFollowing={user.isFollowing}
                            />
                        </div>
                    )}
                </Meta>
            </Body>
            {isMe && (
                <Footer>
                    <LogoutButton />
                    <UserSettingButton />
                </Footer>
            )}
        </Container>
    );
};
