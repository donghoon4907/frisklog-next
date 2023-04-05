import type { FC } from 'react';
import type { EditorProps } from '@toast-ui/react-editor';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import type { CommonState } from '../reducers/common';
import type { AppState } from '../reducers';
import { uploadImageRequest } from '../actions/upload/image.action';
import { useMutation } from '../hooks/use-mutation';
import { PhotoType } from '../types/photo';

const Editor =
    typeof window !== 'undefined' && require('@toast-ui/react-editor').Editor;

type EditorType = ReturnType<typeof Editor>;

const Container = styled.div`
    position: relative;

    .toastui-editor-ww-container .toastui-editor-contents::-webkit-scrollbar {
        display: none;
    }
`;

// const PhotoPopupContainer = styled.div`
//     position: absolute;
//     top: 100px;
//     left 161px;
//     width: 400px;
//     height: 100px;
//     box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
//     border: 1px solid #494c56;
//     background-color: ${({ theme }) => theme.inputBgColor};
//     z-index: 30;
//     padding: 30px;
// `;

interface Props extends EditorProps {
    onChange: (obj: any) => void;
}

// function createPhotoButton() {
//     const button = document.createElement('button');

//     button.className = 'toastui-editor-toolbar-icons photos-icon';

//     return button;
// }

export const PostEditor: FC<Props> = ({
    initialValue = '',
    previewStyle = 'tab',
    height = '75vh',
    initialEditType = 'markdown',
    useCommandShortcut = true,
    onChange,
}) => {
    const { mode, isShowPhotoPopup } = useSelector<AppState, CommonState>(
        (state) => state.common,
    );

    const [upload] = useMutation(uploadImageRequest);

    const $editor = useRef<EditorType>(null);

    const handleChange = () => {
        const instance = $editor.current?.getInstance();
        /**
         * 에디터 output
         * 1. instance.getMarkdown(): markdown type
         * 2. instance.getHtml(): html type
         */
        if (instance?.isWysiwygMode()) {
            onChange(instance.getHTML());
        } else {
            onChange(instance.getMarkdown());
        }
    };

    return (
        <Container>
            <Editor
                initialValue={initialValue}
                previewStyle={previewStyle}
                height={height}
                initialEditType={initialEditType}
                useCommandShortcut={useCommandShortcut}
                ref={$editor}
                onChange={handleChange}
                theme={mode}
                hideModeSwitch
                toolbarItems={[
                    ['heading', 'bold', 'italic', 'strike'],
                    ['hr', 'quote'],
                    ['ul', 'ol', 'task', 'indent', 'outdent'],
                    ['table', 'image', 'link'],
                    ['code', 'codeblock'],
                    [
                        // {
                        //     el: createPhotoButton(),
                        //     tooltip: 'photos',
                        // },
                    ],
                ]}
                hooks={{
                    addImageBlobHook: async (blob: any, callback: any) => {
                        const formData = new FormData();

                        formData.append('file', blob);

                        upload(
                            {
                                formData,
                                type: PhotoType.POST,
                            },
                            (fileName: string) => {
                                callback(fileName, '');
                            },
                        );

                        // return false;
                    },
                }}
            />
        </Container>
    );
};
