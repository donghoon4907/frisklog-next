import { ElementType, FC } from 'react';

import { Scroll } from './Scroll';
import { OffsetPageInfo } from '../interfaces/page-info';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../reducers';
import { LoadingState } from '../reducers/common/loading';
import { AnyAction } from 'redux';

interface Props {
    nodes: Record<string, any>[];
    pageInfo: OffsetPageInfo | null;
    Node: ElementType;
    actionCreator: (payload: any) => AnyAction;
}

export const ScrollList: FC<Props> = ({
    nodes,
    pageInfo,
    Node,
    actionCreator,
}) => {
    const dispatch = useDispatch();

    const { loading } = useSelector<AppState, LoadingState>(
        (state) => state.loading,
    );

    return (
        <>
            {nodes.map((node) => (
                <Node key={`node${node.id}`} {...node} />
            ))}

            <Scroll
                onBottom={(activeScroll) => {
                    const { currentPage, lastPage, pageSize } = pageInfo!;

                    if (currentPage < lastPage) {
                        if (!loading) {
                            dispatch(
                                actionCreator({
                                    limit: pageSize,
                                    offset: pageSize * currentPage,
                                }),
                            );

                            activeScroll();
                        }
                    }
                }}
            />
        </>
    );
};
