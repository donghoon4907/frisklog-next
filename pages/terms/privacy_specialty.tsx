import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';

import { AuthLayout } from '../../components/layout/Auth';

const Title = styled.h2`
    display: block;
    font-weight: 200;
    font-size: 19px;
    line-height: 27px;
    padding-bottom: 20px;
    color: #191919;
`;

const Block = styled.div`
    padding-bottom: 40px;
`;

const Description = styled.p`
    font-size: 12px;
    line-height: 19px;
    color: #7f7f7f;
`;

const Strong = styled.strong`
    display: block;
    padding-bottom: 10px;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: #191919;
`;

const Table = styled.table`
    width: 100%;
    border-top: 2px solid #191919;
    table-layout: fixed;
    border-collapse: separate;

    & th {
        height: 45px;
        border-left: 1px solid rgba(0, 0, 0, 0.14);
        border-bottom: 1px solid #ccc;
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;
        color: #191919;
        text-align: center;
        vertical-align: middle;
    }

    & th:first-child {
        border-left: 0;
    }

    & td {
        padding: 15px 10px;
        border: solid rgba(0, 0, 0, 0.14);
        border-width: 0 0 1px 1px;
        font-size: 11px;
        line-height: 15px;
        color: #7f7f7f;
        vertical-align: top;
    }

    & td:first-child {
        padding-left: 0;
        border-left: 0;
    }
`;

const HiddenCaption = styled.caption`
    text-indent: -9999px;
    line-height: 0;
    overflow: hidden;
    width: 1px;
    font-size: 1px;
`;

const WideBold = styled.b`
    font-size: 120%;
    font-weight: bold;
`;

const Info = styled.ul`
    padding-top: 20px;
`;

const Guide = styled.li`
    font-size: 11px;
    line-height: 16px;
    color: #7f7f7f;

    & + & {
        margin-top: 5px;
    }
`;

const Privacy: NextPage = () => {
    return (
        <>
            <Head>
                <title>개인정보 수집 및 이용 동의</title>
            </Head>
            <AuthLayout>
                <Title>개인정보 수집 및 이용 동의</Title>
                <Block>
                    <Description>
                        Frisklog는 개인정보를 안전하게 취급하는데 최선을
                        다합니다.
                        <br />
                        아래에 동의하시면 통합계정의 프로필정보를 Frisklog가
                        제공하는 계정 기반의 서비스에서 편리하게 이용하실 수
                        있습니다.
                    </Description>
                </Block>
                <Block>
                    <Strong>[필수] 개인정보 수집 및 이용 동의</Strong>
                    <Table>
                        <HiddenCaption>
                            개인정보 수집 및 이용 동의 안내
                        </HiddenCaption>
                        <colgroup>
                            <col style={{ width: '32.5%' }}></col>
                            <col style={{ width: '32.5%' }}></col>
                            <col></col>
                        </colgroup>
                        <thead>
                            <tr>
                                <th scope="col">목적</th>
                                <th scope="col">항목</th>
                                <th scope="col">보유 기간</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    이용자 식별 및 회원관리, 프로필정보 연동
                                </td>
                                <td>이메일, 닉네임, 프로필사진</td>
                                <td rowSpan={4}>
                                    <WideBold>
                                        회원탈퇴 후 지체 없이 삭제
                                    </WideBold>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    <Info>
                        <Guide>
                            서비스 이용과정에서 기기정보, IP주소, 쿠키, 서비스
                            이용기록이 자동으로 수집될 수 있습니다.
                            <br />위 동의를 거부할 권리가 있으며, 동의를
                            거부하실 경우 서비스 이용이 제한됩니다.
                        </Guide>
                        <Guide>
                            더 자세한 내용에 대해서는 [개인정보처리방침]을
                            참고하시길 바랍니다.
                            <br />
                            (https://frisklog.site/terms/privacy)
                        </Guide>
                    </Info>
                </Block>
            </AuthLayout>
        </>
    );
};

export default Privacy;
