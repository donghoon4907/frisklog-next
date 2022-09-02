import { Action } from 'redux';

export interface PayloadAction<T> extends Action<T> {
    payload?: any;
    error?: any;
}
