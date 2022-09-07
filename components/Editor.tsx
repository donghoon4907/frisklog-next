import { FC, useRef } from 'react';
import { EditorProps } from '@toast-ui/react-editor';
import { useDispatch, useSelector } from 'react-redux';
import { CommonState } from '../reducers/common';
import { httpRequestingAlert } from '../lib/alert';
import { UploadImageAction } from '../actions/upload/image.interface';
import { PostEditorContainer } from './Editor.style';
import { AppState } from '../reducers';
import { LoadingState } from '../reducers/common/loading';
import { uploadImageRequest } from '../actions/upload/image.action';
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
    previewStyle = 'vertical',
    height = '75vh',
    initialEditType,
    useCommandShortcut = true,
    onChange,
}) => {
    const dispatch = useDispatch();

    const { mode } = useSelector<AppState, CommonState>(
        (state) => state.common,
    );

    const { isUploadImageLoading } = useSelector<AppState, LoadingState>(
        (state) => state.loading,
    );

    const $editor = useRef<EditorType>(null);

    const handleChange = () => {
        const instance = $editor.current?.getInstance();
        /**
         * 에디터 output
         * 1. instance.getMarkdown(): markdown type
         * 2. instance.getHtml(): html type
         */
        onChange({
            markdown: instance?.getMarkdown(),
            description: instance?.preview?.el.innerText,
        });
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
                initialEditType={initialEditType || 'markdown'}
                useCommandShortcut={useCommandShortcut}
                ref={$editor}
                onChange={handleChange}
                theme={mode}
                hooks={{
                    addImageBlobHook: async (blob: any, callback: any) => {
                        if (isUploadImageLoading) {
                            return httpRequestingAlert();
                        }

                        const formData = new FormData();
                        formData.append('file', blob);

                        dispatch(
                            uploadImageRequest({
                                formData,
                                callbackFunc: (fileName: string) => {
                                    const path = `${process.env.BACKEND_ROOT}/${fileName}`;

                                    callback(path, '');
                                },
                            }),
                        );

                        // return false;
                    },
                }}
            />
        </PostEditorContainer>
    );
};
