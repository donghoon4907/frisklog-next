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
.ant-modal {
    width: calc(${({ theme }) => theme.postWidth} + 0.5rem) !important;
}
.ant-modal-body {
    padding: ${({ theme }) => theme.padding.sm};
}
.ant-popover {
    min-width: 300px;
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

.toastui-editor-contents dir, .toastui-editor-contents menu, .toastui-editor-contents ol, .toastui-editor-contents ul, .toastui-editor-defaultUI button  {
    color: ${({ theme }) => theme.textColor} !important;
}
.toastui-editor-contents ul > li::before {
    background-color: ${({ theme }) => theme.textColor} !important;
}
// 업로드 사진 불러오기 관련
.photos-icon {
    margin: 0 !important;
    background-size: 20px 20px !important;
    background-repeat: no-repeat;
    background-position: 50% 50% !important;
    background-image: url('data:image/svg+xml;utf8,<svg stroke="currentColor" fill="${({
        theme,
    }) =>
        theme.textColor}" stroke-width="0" viewBox="0 0 16 16" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"></path><path d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z"></path></svg>')
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
// progress bar 관련 
#nprogress .bar {
    background: ${({ theme }) => theme.iconColor} !important;
}
// 검색 하이라이팅 관련 
.highlight {
    display: inline;
    box-shadow: inset 0 -20px 0 #D9FCDB;
}
`;
