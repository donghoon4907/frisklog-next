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
    background: var(--frisklog-bg-color);
    color: var(--frisklog-text-color);
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
    background-color: var(--frisklog-divider-color);
    opacity: 1 !important;
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
}
#main::-webkit-scrollbar {
    width: 8px;
}
#main::-webkit-scrollbar-thumb {
    background: var(--frisklog-icon-color);
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
// SETTING - 부트스트랩
.modal {
    display: flex !important;
}

.modal-dialog {
    flex: 1;
    margin: 0 !important;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 100% !important;
}

.modal-content {
    margin: 0 20px;
    background-color: var(--frisklog-modal-color) !important;
}

.modal-header,
.modal-footer {
    border-color: var(--frisklog-border-color) !important;
}

.btn-close {
    color: var(--frisklog-icon-color) !important;
    opacity: 1 !important;
}

.popover-header {
    padding: 0;
}

.dropdown-item {
    padding: 0 !important;
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
.te-mode-switch-section {
    display: none !important;
}
.te-toolbar-section {
    border-color: var(--frisklog-border-color) !important;
}
.tui-editor-defaultUI {
    border-radius: $fr-border-radius;
    border-color: var(--frisklog-border-color) !important;
    background-color: var(--frisklog-input-color) !important;
}
.tui-editor-defaultUI-toolbar {
    background-color: inherit !important;
}
.tui-editor-defaultUI-toolbar button {
    border: none !important;
    background-color: inherit !important;

    &:hover {
        background-color: var(--frisklog-hover-color) !important;
    }
}
.tui-md-code {
    background: none !important;
}
.tui-md-code-block.CodeMirror-linebackground {
    background: none !important;
}
.te-editor *:not(code),
.tui-editor-contents *:not(code) {
    color: var(--frisklog-text-color) !important;
}
.CodeMirror {
    background: inherit !important;
}
.CodeMirror-cursor {
    border-color: var(--frisklog-text-color) !important;
}
.tui-editor .te-md-splitter {
    border-color: var(--frisklog-border-color) !important;
}
.tui-toolbar-divider {
    background-color: var(--frisklog-border-color) !important;
}
.tui-editor-contents img {
    width: 100%;
}
.te-preview::-webkit-scrollbar {
    display: none;
}
.CodeMirror-vscrollbar {
    display: none !important;
}
svg {
    width: 20px;
    height: 20px;
}
svg:not(.activeEscape) {
    fill: ${({ theme }) => theme.iconColor};

    &:hover {
        fill: ${({ theme }) => theme.hoverColor};
    }
}
.markdown-body * {
    color: var(--frisklog-text-color) !important;
}
.markdown-body .highlight pre,
.markdown-body pre,
.markdown-body code,
.tui-editor-contents pre {
    border: 1px solid var(--frisklog-bg-color) !important;
    border-radius: $fr-border-radius !important;
    background-color: var(--frisklog-bg-color) !important;
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
.markdown-body h2,
.tui-editor-contents h1,
.tui-editor-contents h2 {
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
