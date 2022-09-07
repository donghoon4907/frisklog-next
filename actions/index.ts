import { Action } from 'redux';

export interface PayloadAction<P> extends Action<string> {
    payload: P;
}

export interface ErrorAction extends Action<string> {
    error: Error | string;
}

export interface SwitchAction extends Action<string> {}
