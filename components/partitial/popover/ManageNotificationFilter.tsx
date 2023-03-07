import { FC } from 'react';
import { Switch } from 'antd';
import { useSelector } from 'react-redux';

import { useMutation } from '../../../hooks/use-mutation';
import { AppState } from '../../../reducers';
import * as StyledManageNotification from './ManageNotification.style';
import { UserState } from '../../../reducers/user';
import { updateSettingRequest } from '../../../actions/user/update-setting.action';

export const ManageNotificationFilter: FC = () => {
    const { id, receivePostNotification, receiveLikeNotification } =
        useSelector<AppState, UserState>((state) => state.user);

    const [updateSetting] = useMutation(updateSettingRequest, {
        useAuth: true,
    });

    const handleChangePostNoti = (checked: boolean) => {
        updateSetting({
            receivePostNotification: checked,
        });
    };

    const handleChangeLikeNoti = (checked: boolean) => {
        updateSetting({
            receiveLikeNotification: checked,
        });
    };

    const isLoggedIn = !!id;

    return (
        <StyledManageNotification.Filter>
            <StyledManageNotification.SwitchWrapper>
                <Switch
                    size="small"
                    checked={isLoggedIn ? receivePostNotification! : true}
                    onChange={handleChangePostNoti}
                />
                <StyledManageNotification.SwitchDescription>
                    팔로워 포스트 알림 여부
                </StyledManageNotification.SwitchDescription>
            </StyledManageNotification.SwitchWrapper>
            <StyledManageNotification.SwitchWrapper>
                <Switch
                    size="small"
                    checked={isLoggedIn ? receiveLikeNotification! : true}
                    onChange={handleChangeLikeNoti}
                />
                <StyledManageNotification.SwitchDescription>
                    좋아요 알림 여부
                </StyledManageNotification.SwitchDescription>
            </StyledManageNotification.SwitchWrapper>
        </StyledManageNotification.Filter>
    );
};
