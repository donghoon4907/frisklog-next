import { FC } from 'react';
import { useSelector } from 'react-redux';
import { AiTwotoneSetting } from 'react-icons/ai';

import { IconWrapper } from './IconWrapper';
import {
    hideNotificationFilter,
    showNotificationFilter,
} from '../../actions/switch/notification-filter.action';
import { useMutation } from '../../hooks/use-mutation';
import { AppState } from '../../reducers';
import { CommonState } from '../../reducers/common';

export const NotificationSettingButton: FC = () => {
    const { isShowNotificationFilter } = useSelector<AppState, CommonState>(
        (state) => state.common,
    );

    const [show] = useMutation(showNotificationFilter, { useAuth: true });

    const [hide] = useMutation(hideNotificationFilter, { useAuth: true });

    // 클릭 핸들러
    const handleClick = () => {
        if (isShowNotificationFilter) {
            hide();
        } else {
            show();
        }
    };

    return (
        <IconWrapper aria-label="알림 설정" onClick={handleClick}>
            <AiTwotoneSetting />
        </IconWrapper>
    );
};
