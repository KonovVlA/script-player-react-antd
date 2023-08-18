import { IPlayerContext, IScriptRs } from "../app/Models";
import { Action } from 'redux';
import { ExampleActionTypes } from './store/types';
export interface IExampleStore {
    script: IScriptRs;
    context: IPlayerContext;
}
export interface IExampleAction<T> extends Action<keyof typeof ExampleActionTypes> {
    payload: T;
}
