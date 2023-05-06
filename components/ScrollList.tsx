import { ElementType, FC } from 'react';
import styled from 'styled-components';

import { Scroll } from './Scroll';
import { OffsetPageInfo } from '../interfaces/page-info';
import { AnyAction } from 'redux';
import { useLazyQuery } from '../hooks/use-query';
import { mixinBox } from './theme/mixins';
import { NotFoundPost } from './NotFoundPost';

interface Props {
    nodes: Record<string, any>[];
    pageInfo: OffsetPageInfo | null;
    Node: ElementType;
    actionCreator: (payload: any) => AnyAction;
    payload?: any;
}

export const ScrollList: FC<Props> = ({
    nodes,
    pageInfo,
    Node,
    actionCreator,
    payload = {},
}) => {
    const [getNodes] = useLazyQuery(actionCreator);

    return (
        <>
            {nodes.length === 0 && <NotFoundPost />}

            {nodes.map((node, idx) => (
                <Node key={`node${idx}`} {...node} />
            ))}

            <Scroll
                onBottom={() => {
                    const { currentPage, lastPage, pageSize } = pageInfo!;

                    if (currentPage < lastPage) {
                        getNodes({
                            limit: pageSize,
                            offset: pageSize * currentPage,
                            ...payload,
                        });
                    }
                }}
            />
        </>
    );
};
