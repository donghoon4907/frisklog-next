import type { NextPage } from 'next';
import type { ChangeEvent, FormEvent } from 'react';
import Head from 'next/head';
import { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import { AuthLayout } from '../../components/layout/Auth';
import { Button } from '../../components/button';
import { useRoute } from '../../hooks/use-route';

const Title = styled.h2`
    display: block;
    font-weight: 600;
    font-size: 24px;
    line-height: 34px;
`;

const CheckAllWrapper = styled.div`
    margin-top: 50px;
    padding: 0 0 19px 28px;
    border-bottom: 1px solid ${({ theme }) => theme.dividerColor};
`;

const CheckAll = styled.div`
    margin-left: -28px;
    position: relative;
`;

const Checkbox = styled.input`
    position: absolute;
    top: 2px;
    left: 0;
    transform: scale(1.2);
`;

const Label = styled.label`
    position: relative;
    display: block;
    font-weight: 500;
    font-size: 17px;
    line-height: 20px;
    cursor: pointer;
    padding-left: 28px;
`;

const CheckAllHelp = styled.p`
    font-weight: 400;
    line-height: 20px;
    font-size: 14px;
    padding-top: 9px;
    color: #999;
`;

const CheckList = styled.ul`
    padding: 22px 0;
`;

const CheckItem = styled.li`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CheckItemBody = styled.div`
    flex: 1;
`;

const CheckItemMore = styled.div`
    color: ${({ theme }) => theme.colors.blue};
    cursor: pointer;
`;

const Terms: NextPage = () => {
    const { move } = useRoute();

    const [checkAll, setCheckAll] = useState(false);

    const [checkPrivacy, setCheckPrivacy] = useState(false);

    const handleChangeCheckAll = () => {
        setCheckAll(!checkAll);
        setCheckPrivacy(!checkAll);
    };

    const handleChangeCheckPrivacy = (evt: ChangeEvent<HTMLInputElement>) => {
        setCheckPrivacy(evt.target.checked);
    };

    const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();

        if (!checkPrivacy) {
            alert('잘못된 접근입니다. 새로고침하여 진행하세요.');

            return;
        }

        move('/auth/create_account');
    };

    return (
        <>
            <Head>
                <title>Frisklog - 서비스 약관 동의</title>
            </Head>
            <AuthLayout>
                <Title>서비스 약관에 동의해 주세요.</Title>
                <form onSubmit={handleSubmit}>
                    <CheckAllWrapper>
                        <CheckAll>
                            <Checkbox
                                type="checkbox"
                                id="checkAll"
                                checked={checkAll}
                                onChange={handleChangeCheckAll}
                            />
                            <Label htmlFor="checkAll">모두 동의합니다.</Label>
                        </CheckAll>
                        <CheckAllHelp>
                            전체 동의는 필수 및 선택정보에 대한 동의도 포함되어
                            있으며, 개별적으로도 동의를 선택하실 수 있습니다.
                            <br />
                            선택항목에 대한 동의를 거부하시는 경우에도 서비스는
                            이용이 가능합니다.
                        </CheckAllHelp>
                    </CheckAllWrapper>
                    <CheckList>
                        <CheckItem>
                            <CheckItemBody>
                                <Checkbox
                                    type="checkbox"
                                    id="privacy"
                                    checked={checkPrivacy}
                                    onChange={handleChangeCheckPrivacy}
                                />
                                <Label htmlFor="privacy">
                                    [필수] 개인정보 수집 및 이용 동의
                                </Label>
                            </CheckItemBody>
                            <CheckItemMore>
                                <Link href="/terms/privacy_specialty" passHref>
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        자세히 보기
                                    </a>
                                </Link>
                            </CheckItemMore>
                        </CheckItem>
                    </CheckList>
                    <Button
                        type="submit"
                        colorType="primary"
                        disabled={!checkPrivacy}
                    >
                        동의
                    </Button>
                </form>
            </AuthLayout>
        </>
    );
};

export default Terms;
