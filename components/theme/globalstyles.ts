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
    color: inherit !important;
}

hr {
    width: 100%;
    background-color: ${({ theme }) => theme.dividerColor};
    border: none;
    height: 1px !important;
    margin: 0;
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

#main::-webkit-scrollbar, #popover::-webkit-scrollbar {
    width: 8px;
}

#main::-webkit-scrollbar-thumb, #popover::-webkit-scrollbar-thumb {
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

.active-icon {
    display: block;
    width: 20px;
    height: 20px;
}

.active-icon svg, .anticon-close svg {
    width: 20px;
    height: 20px;

    fill: ${({ theme }) => theme.iconColor};

    &:hover {
        fill: ${({ theme }) => theme.hoverColor};
    }
}
.slick-dots li button:before {
    color: ${({ theme }) => theme.iconColor} !important;
}
.slick-dots li.slick-active button:before {
    color: ${({ theme }) => theme.textColor} !important;
}
.ant-modal-body {
    padding: ${({ theme }) => theme.padding.sm};
}
.ant-popover-inner-content {
    padding: 0 !important;
}
.ant-modal-content, .ant-modal-header, .ant-modal-title, .ant-modal-body, .ant-modal-footer, .ant-popover-title, .ant-popover-inner-content {
    background: ${({ theme }) => theme.modalBgColor} !important;
    color: ${({ theme }) => theme.textColor} !important;
}
.ant-modal-header, .ant-popover-title {
    border-bottom-color: ${({ theme }) => theme.borderColor} !important;
}
.ant-modal-mask {
    z-index: 1050 !important;
    background-color: rgba(0, 0, 0, 0.8) !important;
}
.ant-modal-wrap {
    z-index: 1060 !important;
}
.ant-dropdown-menu {
    background: ${({ theme }) => theme.dropdownBgColor};
}
.ant-dropdown-menu-item, .ant-dropdown-menu-submenu-title {
    color: ${({ theme }) => theme.textColor} !important;
}
.ant-dropdown-menu-item:hover {
    color: ${({ theme }) => theme.colors.black_base} !important;
}
.ant-modal-footer {
    border-top-color: ${({ theme }) => theme.borderColor} !important;
}
.toastui-editor-main-container {
    color: ${({ theme }) => theme.textColor} !important;
}
.toastui-editor-contents img {
    width: 100% !important;
}
.toastui-editor-contents p {
    color: ${({ theme }) => theme.textColor} !important;
}
.toastui-editor-contents pre {
    display: flex;
    position: relative;
    background-color: ${({ theme }) => theme.preColor} !important;
}

.toastui-editor-defaultUI {
    border-radius: 0px !important;
}
.toastui-editor-contents dir, .toastui-editor-contents menu, .toastui-editor-contents ol, .toastui-editor-contents ul {
    color: ${({ theme }) => theme.textColor} !important;
}
.toastui-editor-contents ul > li::before {
    background-color: ${({ theme }) => theme.textColor} !important;
}
// 소스 축소 및 확장 관련
.contraction-code {
    cursor: pointer;
    height: 0;
    overflow: hidden;
}
.contraction-code::before {
    position: absolute;
    top: 8px;
    left: 10px;
    content: "코드 보기";
    color: #4b96e6;
}
.contraction-code code {
    display: none;   
}
.expansion-code code {
    display: block !important;
}
.expansion-code::before {
    display: none;
}
// 소스 복사 관련
.expansion-code:hover {
    & div {
        opacity: 1;
    }
}
.copy-code {
    position: absolute;
    top: 8px;
    right: 10px;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
}
.copy-code-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-image: url('data:image/svg+xml;utf8,<svg fill="${({ theme }) =>
        theme.textColor}" stroke="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"></path></svg>')
}
`;
