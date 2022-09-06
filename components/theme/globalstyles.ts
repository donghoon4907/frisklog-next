import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
${reset}
#root,
body,
html {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    tab-size: 4;
    -o-tab-size: 4;
}

body {
    background: ${({ theme }) => theme.bgColor};
    color: ${({ theme }) => theme.textColor};
}

h1,
h2,
h3,
h4,
h5,
h6 {
    margin-bottom: 0;
}

hr {
    width: 100%;
    background-color: ${({ theme }) => theme.dividerColor};
    border: none;
    height: 1px !important;
}

ol,
ul {
    padding: 0;
}

ol,
ul,
dl {
    margin: 0;
}

a,
a:hover,
a:focus,
a:active,
a:visited {
    text-decoration: none;
    color: inherit;
}

pre,
code,
kbd,
samp {
    unicode-bidi: normal !important;
}

button {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    background: transparent;
    color: inherit;
    cursor: pointer;
}
#main::-webkit-scrollbar {
    width: 8px;
}
#main::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.iconColor};
    border-radius: 10px;
}

.a11y-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    clip-path: polygon(0 0, 0 0, 0 0);
}

.btn-close {
    color: var(--frisklog-icon-color) !important;
    opacity: 1 !important;
}

.page-item.active {
    font-weight: bold;
}
.page-link {
    color: var(--frisklog-text-color) !important;
    background-color: var(--frisklog-box-color) !important;
    border: none !important;

    &:hover {
        background-color: var(--frisklog-hover-color) !important;
        color: $fr-black-color !important;
    }
}

.icon-button svg, .anticon-close svg {
    width: 20px;
    height: 20px;

    fill: ${({ theme }) => theme.iconColor};

    &:hover {
        fill: ${({ theme }) => theme.hoverColor};
    }
}
.ant-modal-body {
    padding: ${({ theme }) => theme.padding.sm};
}
.ant-modal-header, .ant-modal-title, .ant-modal-body, .ant-modal-footer {
    background: ${({ theme }) => theme.modalBgColor} !important;
    color: ${({ theme }) => theme.textColor} !important;
}
.ant-modal-header {
    border-bottom-color: ${({ theme }) => theme.dividerColor} !important;
}

.ant-modal-footer {
    border-top-color: ${({ theme }) => theme.dividerColor} !important;
}

.markdown-body * {
    color: ${({ theme }) => theme.textColor} !important;
}
.markdown-body .highlight pre,
.markdown-body pre,
.markdown-body code{
    border: 1px solid ${({ theme }) => theme.bgColor} !important;
    border-radius: ${({ theme }) => theme.borderRadius} !important;
    background-color: ${({ theme }) => theme.bgColor} !important;
    overflow: hidden !important;
}
.markdown-body pre code {
    white-space: pre-wrap;
}
.markdown-body img {
    background-color: inherit !important;
}

.markdown-body *:not(.fr-thumbnail, .fr-thumbnail__image, a, code, strong, li) {
    margin: 12px;
}
.markdown-body li > p {
    display: inline-block;
    margin: 0 !important;
}
.markdown-body ol,
.markdown-body ul {
    padding-left: 10px !important;
}

.markdown-body ol {
    list-style-type: decimal;
    list-style-position: inside;
}

.markdown-body ul {
    list-style-type: disc;
    list-style-position: inside;
}

.markdown-body ul ul,
.markdown-body ol ul {
    list-style-type: circle;
    list-style-position: inside;
}

.markdown-body ol ol,
.markdown-body ul ol {
    list-style-type: lower-latin;
    list-style-position: inside;
}

.markdown-body h1,
.markdown-body h2{
    border-bottom: none !important;
}

.markdown-body h1 {
    font-size: 20px !important;
}

.markdown-body h2 {
    font-size: 18px !important;
}

.markdown-body h3 {
    font-size: 16px !important;
}

.markdown-body h4 {
    font-size: 14px !important;
}

.markdown-body h5 {
    font-size: 12px !important;
}

.markdown-body h6 {
    font-size: 10px !important;
}
`;
