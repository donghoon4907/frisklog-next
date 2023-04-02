import type { FC } from 'react';
import styled from 'styled-components';

import { PhotoItem } from './template/PhotoItem';
import { mixinBox } from './theme/mixins';
import { CoreSetState } from '../types/core';
import { Photo } from '../interfaces/photo';

const Container = styled.div`
    width: 100%;
    max-height: 273px;

    ${mixinBox}
`;

const Body = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    max-height: 222px;
    overflow-y: auto;
`;

interface Props {
    setPhoto: CoreSetState<string>;
    items: Photo[];
}

export const Photos: FC<Props> = ({ setPhoto, items }) => {
    return (
        <Container>
            <Body>
                {items.map((photos) => (
                    <div key={`profilePhotos${photos.id}`}>
                        <PhotoItem
                            {...photos}
                            setPhoto={setPhoto}
                            isShowCheckbox={true}
                        />
                    </div>
                ))}
            </Body>
        </Container>
    );
};
