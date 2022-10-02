import styled from 'styled-components';
import { mixinBox, mixinCancelAndSubmit } from '../theme/mixins';

export const Form = styled.form``;

export const FormColumn = styled.div`
    margin: 10px 0;
`;

export const FormUploadAvatarColumn = styled.div`
    height: 186px;

    ${mixinBox}
`;

export const FormSubmitColumn = styled.div`
    margin-bottom: 10px;

    ${mixinCancelAndSubmit(10)};
`;
