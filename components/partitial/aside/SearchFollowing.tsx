import { useRouter } from 'next/router';
import { FormEvent } from 'react';
import { useSelector } from 'react-redux';

import { getFollowingsRequest } from '../../../actions/user/get-followings.action';
import { useInput } from '../../../hooks/use-input';
import { useQuery } from '../../../hooks/use-query';
import { AppState } from '../../../reducers';
import { UserState } from '../../../reducers/user';
import { Button } from '../../button';
import { FollowingItem } from '../../FollowingItem';
import { FormInput } from '../../FormInput';
import * as StyledSearchFollowing from './SearchFollowing.style';

export const SearchFollowing = () => {
    const router = useRouter();

    const { searchedFollowings } = useSelector<AppState, UserState>(
        (state) => state.user,
    );

    const [getFollowings] = useQuery(getFollowingsRequest);

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

        router.push(`/follow?${searchParams.toString()}`);
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
                                placeholder="???????????? ???????????????"
                                id="followingSearch"
                                autoComplete="off"
                                required
                                label="?????????"
                                {...nickname}
                            >
                                <StyledSearchFollowing.Button>
                                    <Button type="submit" colorType="primary">
                                        ??????
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
                        ?????? ????????? ????????????.
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
                                ??????
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
                                ??????
                            </Button>
                        </StyledSearchFollowing.Button>
                    </div>
                </StyledSearchFollowing.Footer>
            )}
        </StyledSearchFollowing.Container>
    );
};
