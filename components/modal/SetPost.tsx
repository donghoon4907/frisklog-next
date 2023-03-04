import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'antd';

import { useInput, UseInputWhere } from '../../hooks/use-input';
import { PostEditor } from '../Editor';
import { AppState } from '../../reducers';
import { hidePostModal } from '../../actions/switch/post-modal.action';
import { initActivePost } from '../../actions/post/active-post.action';
import { PostState } from '../../reducers/post';
import { CommonState } from '../../reducers/common';
import { PostCategoriesForm } from '../form/PostCategories';
import { useMutation } from '../../hooks/use-mutation';
import { createPostRequest } from '../../actions/post/create-post.action';
import { updatePostRequest } from '../../actions/post/update-post.action';
import { CustomSelect } from '../CustomSelect';
import { postVisibilityOptions } from '../options/visibility';
import { ISelectOption } from '../../interfaces/select';

export const SetPostModal: FC = () => {
    const dispatch = useDispatch();

    const { activePost } = useSelector<AppState, PostState>(
        (state) => state.post,
    );

    const { isShowPostModal } = useSelector<AppState, CommonState>(
        (state) => state.common,
    );

    const [visibility, setVisibility] = useState<ISelectOption>(
        postVisibilityOptions[0],
    );

    const [createPost] = useMutation(createPostRequest, {
        useAuth: true,
        useReload: true,
    });

    const [updatePost] = useMutation(updatePostRequest, {
        useAuth: true,
        useReload: true,
    });

    const category = useInput('', UseInputWhere.NO_SPACE);

    const [categories, setCategories] = useState<string[]>([]);

    const [content, setContent] = useState<string>('');

    const isUpdate = !!activePost.id;

    const handleClose = () => {
        // 팝업 숨기기
        dispatch(hidePostModal());
    };

    const handleAfterClose = () => {
        // 상태 초기화
        dispatch(initActivePost());

        category.setValue('');

        setContent('');

        setCategories([]);
    };

    // 등록 및 수정 핸들러
    const handleOk = async () => {
        const message = `입력한 내용으로 게시물을 ${
            isUpdate ? '수정' : '등록'
        }하시겠어요?`;

        const tf = confirm(message);

        if (tf) {
            if (isUpdate) {
                updatePost({
                    id: activePost.id!,
                    content,
                    categories,
                    visibility: visibility.value,
                });
            } else {
                createPost({
                    content,
                    categories,
                    visibility: visibility.value,
                });
            }
        }
    };

    useEffect(() => {
        const { id, content, categories, visibility } = activePost;

        if (id !== null) {
            setContent(content!);

            setCategories(categories);

            const visIdx = postVisibilityOptions.findIndex(
                ({ value }) => value === visibility,
            );

            if (visIdx !== -1) {
                setVisibility(postVisibilityOptions[visIdx]);
            }
        }
    }, [activePost]);

    return (
        <Modal
            title={`게시물 ${isUpdate ? '수정' : '등록'}`}
            visible={isShowPostModal}
            onCancel={handleClose}
            onOk={handleOk}
            destroyOnClose
            afterClose={handleAfterClose}
            centered
        >
            <PostEditor
                height="50vh"
                previewStyle="tab"
                initialEditType="markdown"
                initialValue={content}
                onChange={(content) => setContent(content)}
            />
            <div style={{ marginTop: '0.5rem' }}>
                <CustomSelect
                    activeOption={visibility}
                    setOption={setVisibility}
                    options={postVisibilityOptions}
                />
            </div>
            <PostCategoriesForm
                category={category}
                categories={categories}
                setCategories={setCategories}
            />
        </Modal>
    );
};
