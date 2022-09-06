import { FC, FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'antd';

import { useInput, UseInputWhere } from '../../hooks/use-input';
import { ActivePostAction } from '../../actions/post/active-post';
import { PostModalAction } from '../../actions/switch/post-modal';
import { useAuthenticate } from '../../hooks/use-authenticate';
import { PostEditor } from '../Editor';
import { FormInput } from '../FormInput';
import { Form, FormColumn } from '../form/form.style';
import { FormInputWithLeftBox } from '../FormInput.style';
import { DeleteableButton } from '../button/Deleteable';

export const SetPostModal: FC = () => {
    const dispatch = useDispatch();

    const { post, common } = useSelector<any, any>((state) => state);

    const { validateToken } = useAuthenticate();

    const category = useInput('', UseInputWhere.NO_SPACE);

    const [categories, setCategories] = useState<string[]>(
        post.activePost.categories,
    );

    const [content, setContent] = useState(post.activePost.content);

    const loading = post.isAddPostLoading || post.isUpdatePostLoading;

    const isUpdate = !!post.activePost.id;

    const handleClose = () => {
        // 팝업 숨기기
        dispatch({
            type: PostModalAction.HIDE,
        });
        // 상태 초기화
        dispatch({
            type: ActivePostAction.INIT,
        });
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
            if (loading) {
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
            visible={common.isShowPostModal}
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
