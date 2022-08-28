import produce from 'immer';

const initialState: Record<string, any> = {
    mode: 'light',
};

export default (state = initialState, action: any) =>
    produce(state, draft => {
        switch (action.type) {
            default: {
                return state;
            }
        }
    });
