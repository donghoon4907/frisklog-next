import { FC } from 'react';

import { LabelBody } from './Label.style';

interface Props {
    id: string;
    label: string;
    value?: string;
}

export const Label: FC<Props> = ({ id, label, value }) => (
    <LabelBody htmlFor={id} isEmpty={!value}>
        {label}
    </LabelBody>
);
