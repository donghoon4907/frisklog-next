export enum ActivePostAction {
    SET = 'SET_ACTIVE_POST',
    INIT = 'INIT_ACTIVE_POST',
}

export interface ActivePostPayload {
    id: string;
    content: string;
    categories: string[];
}
