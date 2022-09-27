import { useState, ChangeEvent } from 'react';

export enum UseInputWhere {
    NO_SPACE = 'NO_SPACE',
}

export const useInput = (defaultValue: string, where?: UseInputWhere) => {
    const [value, setValue] = useState(defaultValue);

    const onChange = (
        evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        let nextVal = evt.target.value;

        if (where === UseInputWhere.NO_SPACE) {
            nextVal = nextVal.replace(/(^\s*)|(\s*$)/g, '');
        }

        setValue(nextVal);
    };

    return { value, onChange, setValue };
};

export type UseInputType = ReturnType<typeof useInput>;
