import { FC, useRef } from 'react';
import { EditorProps } from '@toast-ui/react-editor';
import { useSelector } from 'react-redux';

import { CommonState } from '../reducers/common';
import { PostEditorContainer } from './Editor.style';
import { AppState } from '../reducers';
import { uploadImageRequest } from '../actions/upload/image.action';
import { useMutation } from '../hooks/use-mutation';
// import codeSyntaxHightlight from "@toast-ui/editor-plugin-code-syntax-highlight";
// import hljs from "highlight.js";

const Editor =
    typeof window !== 'undefined' && require('@toast-ui/react-editor').Editor;

type EditorType = ReturnType<typeof Editor>;

interface Props extends EditorProps {
    onChange: (obj: any) => void;
}

export const PostEditor: FC<Props> = ({
    initialValue = '',
    previewStyle = 'tab',
    height = '75vh',
    initialEditType = 'wysiwyg',
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
                plugins={
                    [
                        // [codeSyntaxHightlight, { hljs }]
                    ]
                }
                initialValue={initialValue}
                previewStyle={previewStyle}
                height={height}
                initialEditType={initialEditType}
                useCommandShortcut={useCommandShortcut}
                ref={$editor}
                onChange={handleChange}
                theme={mode}
                hideModeSwitch
                hooks={{
                    addImageBlobHook: async (blob: any, callback: any) => {
                        const formData = new FormData();

                        formData.append('file', blob);

                        upload(
                            {
                                formData,
                            },
                            (fileName: string) => {
                                const path = `${process.env.BACKEND_ROOT}/${fileName}`;

                                callback(path, '');
                            },
                        );

                        // return false;
                    },
                }}
            />
        </PostEditorContainer>
    );
};
