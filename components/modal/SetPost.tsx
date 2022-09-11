import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'antd';

import { useInput, UseInputWhere } from '../../hooks/use-input';
import { useAuthenticate } from '../../hooks/use-authenticate';
import { PostEditor } from '../Editor';
import { AppState } from '../../reducers';
import { hidePostModal } from '../../actions/switch/post-modal.action';
import { initActivePost } from '../../actions/post/active-post.action';
import { PostState } from '../../reducers/post';
import { CommonState } from '../../reducers/common';
import { LoadingState } from '../../reducers/common/loading';
import { createPostRequest } from '../../actions/post/create-post.action';
import { updatePostRequest } from '../../actions/post/update-post.action';
import { PostCategoriesForm } from '../form/PostCategories';

export const SetPostModal: FC = () => {
    const dispatch = useDispatch();

    const { activePost } = useSelector<AppState, PostState>(
        (state) => state.post,
    );

    const { isShowPostModal } = useSelector<AppState, CommonState>(
        (state) => state.common,
    );

    const { loading } = useSelector<AppState, LoadingState>(
        (state) => state.loading,
    );

    const { validateToken } = useAuthenticate();

    const category = useInput('', UseInputWhere.NO_SPACE);

    const [categories, setCategories] = useState<string[]>(
        activePost.categories || [],
    );

    const [content, setContent] = useState(activePost.content || '');

    const isUpdate = !!activePost.id;

    const handleClose = () => {
        // 팝업 숨기기
        dispatch(hidePostModal());
        // 상태 초기화
        dispatch(initActivePost());

        category.setValue('');

        setContent('');

        setCategories([]);
    };

    // 등록 및 수정 핸들러
    const handleOk = async () => {
        // 로그인 체크
        const token = validateToken();

        if (token !== null) {
            if (loading) {
                return alert('요청 중입니다. 잠시만 기다려주세요.');
            }

            const tf = confirm(
                `입력한 내용으로 게시물을 ${
                    isUpdate ? '수정' : '등록'
                }하시겠어요?`,
            );

            if (tf) {
                if (isUpdate) {
                    dispatch(
                        updatePostRequest({
                            id: activePost.id!,
                            content,
                            categories,
                        }),
                    );
                } else {
                    dispatch(
                        createPostRequest({
                            content,
                            categories,
                        }),
                    );
                }
            }
        }
    };

    return (
        <Modal
            title={`게시물 ${isUpdate ? '수정' : '등록'}`}
            visible={isShowPostModal}
            onCancel={handleClose}
            onOk={handleOk}
            destroyOnClose
            centered
        >
            <PostEditor
                height="50vh"
                previewStyle="tab"
                initialEditType="wysiwyg"
                onChange={(content) => setContent(content)}
            />
            <PostCategoriesForm
                category={category}
                categories={categories}
                setCategories={setCategories}
            />
        </Modal>
    );
};
