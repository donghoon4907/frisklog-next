import styled from 'styled-components';
import { mixinCancelAndSubmit } from '../theme/mixins';

export const Form = styled.form``;

export const FormColumn = styled.div`
    margin: 10px 0;
`;

export const FormSubmitColumn = styled.div`
    margin-bottom: 10px;

    ${mixinCancelAndSubmit(10)};
`;
