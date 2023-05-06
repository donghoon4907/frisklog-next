import { useRouter } from 'next/router';
import { FormEvent } from 'react';
import { useSelector } from 'react-redux';

import { getFollowingsRequest } from '../../../actions/user/get-followings.action';
import { useInput } from '../../../hooks/use-input';
import { useLazyQuery } from '../../../hooks/use-query';
import { AppState } from '../../../reducers';
import { UserState } from '../../../reducers/user';
import { Button } from '../../button';
import { FollowingItem } from '../../FollowingItem';
import { FormInput } from '../../FormInput';
import * as StyledSearchFollowing from './SearchFollowing.style';
import { useRoute } from '../../../hooks/use-route';

export const SearchFollowing = () => {
    const router = useRouter();

    const route = useRoute();

    const { searchedFollowings } = useSelector<AppState, UserState>(
        (state) => state.user,
    );

    const [getFollowings] = useLazyQuery(getFollowingsRequest);

    const search = router.asPath.split('?')[1] || '';

    const searchParams = new URLSearchParams(`?${search}`);

    const searchKeyword = searchParams.get('search') || '';

    const nickname = useInput(searchKeyword);

    const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();

        if (searchParams.has('userId')) {
            searchParams.delete('userId');
        }

        searchParams.set('search', nickname.value);

        route.move(`/follow?${searchParams.toString()}`);
    };

    const handlePage = (pageNo: number) => {
        const { search } = router.query;

        getFollowings({
            limit: 5,
            offset: 5 * (pageNo - 1),
            nickname: (search as string) || undefined,
        });
    };

    const { nodes, pageInfo } = searchedFollowings;

    const isActiveFooter = pageInfo && pageInfo.lastPage > 1;

    return (
        <StyledSearchFollowing.Container>
            <StyledSearchFollowing.Header>
                <div>
                    <form onSubmit={handleSubmit}>
                        <StyledSearchFollowing.Input>
                            <FormInput
                                placeholder="검색어를 입력하세요"
                                id="followingSearch"
                                autoComplete="off"
                                required
                                label="검색어"
                                {...nickname}
                            >
                                <StyledSearchFollowing.Button>
                                    <Button type="submit" colorType="primary">
                                        검색
                                    </Button>
                                </StyledSearchFollowing.Button>
                            </FormInput>
                        </StyledSearchFollowing.Input>
                    </form>
                </div>
            </StyledSearchFollowing.Header>
            <StyledSearchFollowing.Body>
                {nodes.length === 0 && (
                    <StyledSearchFollowing.Empty>
                        검색 결과가 없습니다.
                    </StyledSearchFollowing.Empty>
                )}
                {nodes.map((user, idx) => (
                    <FollowingItem key={`followItem${idx}`} {...user} />
                ))}
            </StyledSearchFollowing.Body>
            {isActiveFooter && (
                <StyledSearchFollowing.Footer>
                    <div>
                        <StyledSearchFollowing.Button>
                            <Button
                                type="button"
                                colorType="info"
                                disabled={pageInfo.currentPage === 1}
                                onClick={() =>
                                    handlePage(pageInfo.currentPage - 1)
                                }
                            >
                                이전
                            </Button>
                        </StyledSearchFollowing.Button>
                    </div>
                    <div>
                        <StyledSearchFollowing.Button>
                            <Button
                                type="button"
                                colorType="info"
                                disabled={
                                    pageInfo.currentPage === pageInfo.lastPage
                                }
                                onClick={() =>
                                    handlePage(pageInfo.currentPage + 1)
                                }
                            >
                                다음
                            </Button>
                        </StyledSearchFollowing.Button>
                    </div>
                </StyledSearchFollowing.Footer>
            )}
        </StyledSearchFollowing.Container>
    );
};
