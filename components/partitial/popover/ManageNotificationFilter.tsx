import { FC } from 'react';
import { Switch } from 'antd';
import { useSelector } from 'react-redux';

import { useMutation } from '../../../hooks/use-mutation';
import { AppState } from '../../../reducers';
import * as StyledManageNotification from './ManageNotification.style';
import { UserState } from '../../../reducers/user';
import { updateSettingRequest } from '../../../actions/user/update-setting.action';

export const ManageNotificationFilter: FC = () => {
    const { receivePostNotification } = useSelector<AppState, UserState>(
        (state) => state.user,
    );

    const [updateSetting] = useMutation(updateSettingRequest, {
        useAuth: true,
    });

    const handleChange = (checked: boolean) => {
        updateSetting({
            receivePostNotification: checked,
        });
    };

    const isLoggedIn = typeof receivePostNotification === 'boolean';

    return (
        <StyledManageNotification.Filter>
            <StyledManageNotification.SwitchWrapper>
                <Switch
                    size="small"
                    checked={isLoggedIn ? receivePostNotification : true}
                    onChange={handleChange}
                />
                <StyledManageNotification.SwitchDescription>
                    팔로워 포스트 알림 여부
                </StyledManageNotification.SwitchDescription>
            </StyledManageNotification.SwitchWrapper>
        </StyledManageNotification.Filter>
    );
};
