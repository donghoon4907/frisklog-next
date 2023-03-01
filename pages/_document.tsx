import Document, {
    DocumentContext,
    Head,
    Html,
    Main,
    NextScript,
} from 'next/document';
import { ReactElement } from 'react';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet();

        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);

            return {
                ...initialProps,
                styles: [initialProps.styles, sheet.getStyleElement()],
            };
        } finally {
            sheet.seal();
        }
    }

    render(): ReactElement {
        return (
            <Html>
                <Head>
                    <link
                        rel="apple-touch-icon"
                        sizes="57x57"
                        href="/apple-icon-57x57.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="60x60"
                        href="/apple-icon-60x60.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="72x72"
                        href="/apple-icon-72x72.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="76x76"
                        href="/apple-icon-76x76.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="114x114"
                        href="/apple-icon-114x114.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="120x120"
                        href="/apple-icon-120x120.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="144x144"
                        href="/apple-icon-144x144.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="152x152"
                        href="/apple-icon-152x152.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="/apple-icon-180x180.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="192x192"
                        href="/android-icon-192x192.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="/favicon-32x32.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="96x96"
                        href="/favicon-96x96.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="/favicon-16x16.png"
                    />
                    <link rel="manifest" href="/manifest.json" />
                    <meta name="theme-color" content="#ffffff" />
                    <meta charSet="utf-8" />
                    <meta httpEquiv="cache-control" content="no-store" />
                    <meta
                        httpEquiv="Content-Security-Policy"
                        content="upgrade-insecure-requests"
                    />
                    <meta name="msapplication-TileColor" content="#ffffff" />
                    <meta
                        name="msapplication-TileImage"
                        content="/ms-icon-144x144.png"
                    />
                    <meta
                        name="description"
                        content="Frisklog는 블로그 서비스입니다. 최신 포스트와 추천인의 포스트를 살펴보세요."
                    />
                    <meta name="keywords" content="frisklog, blog" />
                    <meta property="og:title" content="Frisklog" />
                    <meta
                        property="og:description"
                        content="Frisklog는 블로그 서비스입니다. 최신 포스트와 추천인의 포스트를 살펴보세요."
                    />
                    <meta property="og:image" content="/thumbnail.png" />
                    <meta property="og:image:width" content="200" />
                    <meta property="og:image:height" content="200" />
                    <meta property="og:site_name" content="Frisklog" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="http://frisklog.site" />
                    <meta name="twitter:title" content="Frisklog" />
                    <meta
                        name="twitter:description"
                        content="Frisklog는 블로그 서비스입니다. 최신 포스트와 추천인의 포스트를 살펴보세요."
                    />
                    <meta name="twitter:image" content="/thumbnail.png" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
