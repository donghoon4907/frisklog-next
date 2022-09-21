import { Action } from 'redux';
import { ErrorPayload } from '../interfaces/error';

export interface PayloadAction<P> extends Action<string> {
    payload: P;
}

export interface ErrorAction extends Action<string> {
    error: ErrorPayload;
}

export interface SwitchAction extends Action<string> {}

export interface Payload {
    callbackFunc?: (props: any) => void;
}
