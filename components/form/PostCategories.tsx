import { FC, Dispatch, SetStateAction, FormEvent } from 'react';

import { UseInputType } from '../../hooks/use-input';
import { DeleteableButton } from '../button/Deleteable';
import { FormInput } from '../FormInput';
import { FormInputWithLeftBox } from '../FormInput.style';
import { Form, FormColumn } from './form.style';

interface Props {
    category: UseInputType;
    categories: string[];
    setCategories: Dispatch<SetStateAction<string[]>>;
}

export const PostCategoriesForm: FC<Props> = ({
    category,
    categories,
    setCategories,
}) => {
    const handleAddCategory = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();

        if (category.value.match(/\s/g)) {
            return alert('카테고리에 공백을 포함할 수 없습니다.');
        }

        if (category.value.length > 10) {
            return alert('카테고리는 10자 미만으로 입력하세요.');
        }

        if (category.value !== category.value.toLowerCase()) {
            return alert('카테고리는 대문자를 사용할 수 없습니다.');
        }

        const findIndex = categories.findIndex((cat) => cat === category.value);

        if (findIndex !== -1) {
            return alert('이미 추가된 카테고리입니다.');
        }

        setCategories((categories) => [...categories, category.value]);

        category.setValue('');
    };

    const handleRemoveCategory = (removeCategory: string) => {
        setCategories((categories) =>
            categories.filter((category) => category !== removeCategory),
        );
    };

    return (
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
                                text={category}
                                aria-label="카테고리 삭제"
                                onRemove={handleRemoveCategory}
                            />
                        ))}
                    </FormInputWithLeftBox>
                </FormInput>
            </FormColumn>
        </Form>
    );
};
