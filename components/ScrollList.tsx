import { ElementType, FC } from 'react';

import { Scroll } from './Scroll';
import { OffsetPageInfo } from '../interfaces/page-info';
import { AnyAction } from 'redux';
import { useQuery } from '../hooks/use-query';

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
    const [getNodes] = useQuery(actionCreator);

    return (
        <>
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
