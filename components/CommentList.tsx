import type { FC } from 'react';
import styled from 'styled-components';

import type { Comment } from '../interfaces/comment';
import type { OffsetPageInfo } from '../interfaces/page-info';
import { postCommentsRequest } from '../actions/comment/post-comments.action';
import { CreateCommentForm } from './form/CreateComment';
import { useQuery } from '../hooks/use-query';
import { Button } from './button';
import { CommentItem } from './template/CommentItem';

const CommentListPagination = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > div {
        width: 70px;
    }
`;

interface Props {
    nodes: Comment[];
    pageInfo: OffsetPageInfo;
    postId: string;
}

export const CommentList: FC<Props> = ({ nodes, pageInfo, postId }) => {
    const [getComments] = useQuery(postCommentsRequest);

    const handlePage = (pageNo: number) => {
        getComments({
            postId,
            offset: 5 * (pageNo - 1),
            limit: 5,
        });
    };

    return (
        <>
            <CreateCommentForm postId={postId} />
            <ul>
                {nodes.map((node) => (
                    <CommentItem key={`comment${node.id}`} {...node} />
                ))}
            </ul>
            {pageInfo && pageInfo.totalCount > 0 && (
                <CommentListPagination>
                    <div>
                        <Button
                            type="button"
                            colorType="info"
                            disabled={pageInfo.currentPage === 1}
                            onClick={() => handlePage(pageInfo.currentPage - 1)}
                        >
                            이전
                        </Button>
                    </div>
                    <div>
                        <Button
                            type="button"
                            colorType="info"
                            disabled={
                                pageInfo.currentPage === pageInfo.lastPage
                            }
                            onClick={() => handlePage(pageInfo.currentPage + 1)}
                        >
                            다음
                        </Button>
                    </div>
                </CommentListPagination>
            )}
        </>
    );
};
