import { FC, useRef } from 'react';
import { EditorProps } from '@toast-ui/react-editor';
import { useSelector } from 'react-redux';
import { BsCloudDownload } from 'react-icons/bs';
import * as ReactDOMServer from 'react-dom/server';

import { CommonState } from '../reducers/common';
import { PostEditorContainer } from './Editor.style';
import { AppState } from '../reducers';
import { uploadImageRequest } from '../actions/upload/image.action';
import { useMutation } from '../hooks/use-mutation';
import { PhotoType } from '../types/photo';

const Editor =
    typeof window !== 'undefined' && require('@toast-ui/react-editor').Editor;

type EditorType = ReturnType<typeof Editor>;

interface Props extends EditorProps {
    onChange: (obj: any) => void;
}

function createPhotoButton() {
    const button = document.createElement('button');

    button.className = 'toastui-editor-toolbar-icons photos-icon';

    return button;
}

export const PostEditor: FC<Props> = ({
    initialValue = '',
    previewStyle = 'tab',
    height = '75vh',
    initialEditType = 'markdown',
    useCommandShortcut = true,
    onChange,
}) => {
    const { mode } = useSelector<AppState, CommonState>(
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
        <PostEditorContainer>
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
                    ['table', 'link'],
                    ['code', 'codeblock'],
                    [
                        'image',
                        {
                            el: createPhotoButton(),
                            tooltip: 'photos',
                        },
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
        </PostEditorContainer>
    );
};
