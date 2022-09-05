import { Dispatch, FC, SetStateAction, useRef } from 'react';
import { EditorProps } from '@toast-ui/react-editor';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../reducers';
import { ICommonState } from '../reducers/common';
import { httpRequestingAlert } from '../lib/alert';
import { UploadImageAction } from '../actions/common/upload-image';
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
    initialEditType = 'markdown',
    useCommandShortcut = true,
    onChange,
}) => {
    const dispatch = useDispatch();

    const { isUploadImageLoading } = useSelector<IState, ICommonState>(
        (state) => state.common,
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
        <div>
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
                hooks={{
                    addImageBlobHook: async (blob: any, callback: any) => {
                        if (isUploadImageLoading) {
                            return httpRequestingAlert();
                        }

                        const formData = new FormData();
                        formData.append('file', blob);

                        dispatch({
                            type: UploadImageAction.REQUEST,
                            payload: {
                                formData,
                                callbackFunc: (fileName: string) => {
                                    const path = `${process.env.BACKEND_ROOT}/${fileName}`;

                                    callback(path, '');
                                },
                            },
                        });

                        // return false;
                    },
                }}
            />
        </div>
    );
};
