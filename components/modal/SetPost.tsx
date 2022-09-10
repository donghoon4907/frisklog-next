import { FC, FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'antd';

import { useInput, UseInputWhere } from '../../hooks/use-input';
import { useAuthenticate } from '../../hooks/use-authenticate';
import { PostEditor } from '../Editor';
import { FormInput } from '../FormInput';
import { Form, FormColumn } from '../form/form.style';
import { FormInputWithLeftBox } from '../FormInput.style';
import { DeleteableButton } from '../button/Deleteable';
import { AppState } from '../../reducers';
import { hidePostModal } from '../../actions/switch/post-modal.action';
import { initActivePost } from '../../actions/post/active-post.action';
import { PostState } from '../../reducers/post';
import { CommonState } from '../../reducers/common';
import { LoadingState } from '../../reducers/common/loading';
import { CREATE_POST_KEY } from '../../actions/post/create-post.action';
import { UPDATE_POST_KEY } from '../../actions/post/update-post.action';

export const SetPostModal: FC = () => {
    const dispatch = useDispatch();

    const { activePost } = useSelector<AppState, PostState>(
        (state) => state.post,
    );

    const { isShowPostModal } = useSelector<AppState, CommonState>(
        (state) => state.common,
    );

    const loading = useSelector<AppState, LoadingState>(
        (state) => state.loading,
    );

    const { validateToken } = useAuthenticate();

    const category = useInput('', UseInputWhere.NO_SPACE);

    const [categories, setCategories] = useState<string[]>(
        activePost.categories || [],
    );

    const [content, setContent] = useState(activePost.content || '');

    const isLoading = loading[CREATE_POST_KEY] || loading[UPDATE_POST_KEY];

    const isUpdate = !!activePost.id;

    const handleClose = () => {
        // 팝업 숨기기
        dispatch(hidePostModal());
        // 상태 초기화
        dispatch(initActivePost());

        category.setValue('');

        setContent('');
    };

    const handleAddCategory = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();

        if (category.value.length > 10) {
            return alert('카테고리는 10자 미만으로 입력하세요.');
        }

        const findIndex = categories.findIndex((cat) => cat === category.value);

        if (findIndex !== -1) {
            return alert('이미 추가된 카테고리입니다.');
        }

        setCategories((categories) => [...categories, category.value]);
    };

    const handleRemoveCategory = (removeCategory: string) => {
        setCategories((categories) =>
            categories.filter((category) => category !== removeCategory),
        );
    };
    // 등록 및 수정 핸들러
    const handleOk = async () => {
        // 로그인 체크
        const token = validateToken();

        if (token !== null) {
            if (isLoading) {
                return alert('요청 중입니다. 잠시만 기다려주세요.');
            }

            // const content = content.markdown;

            const tf = confirm(
                `입력한 내용으로 게시물을 ${
                    isUpdate ? '수정' : '등록'
                }하시겠어요?`,
            );

            if (tf) {
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
                onChange={(content) => setContent(content)}
            />
            <Form onSubmit={handleAddCategory}>
                <FormColumn>
                    <FormInput
                        id="category"
                        placeholder="카테고리를 입력하세요"
                        autoComplete="off"
                        label="카테고리"
                        {...category}
                    >
                        <FormInputWithLeftBox>
                            {categories.map((category, index) => (
                                <DeleteableButton
                                    key={`setPostCategory${index}`}
                                    content={category}
                                    ariaLabel="카테고리 삭제"
                                    onClick={handleRemoveCategory}
                                />
                            ))}
                        </FormInputWithLeftBox>
                    </FormInput>
                </FormColumn>
            </Form>
        </Modal>
    );
};
