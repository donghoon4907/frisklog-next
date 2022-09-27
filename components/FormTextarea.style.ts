import styled from 'styled-components';

import { FormInputContainer } from './FormInput.style';
import { mixinBox } from './theme/mixins';

export const FormTextareaContainer = styled(FormInputContainer)`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`;

export const FormTextareaBody = styled.textarea`
    width: 100%;
    line-height: 10px;
    resize: none;
    font-size: 0.8rem;
    overflow: auto;
    padding: 1rem;
    color: inherit;

    &:focus {
        outline: none;
    }

    ${mixinBox};
`;
