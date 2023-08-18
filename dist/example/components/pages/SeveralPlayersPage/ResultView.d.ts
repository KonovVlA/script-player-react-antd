/// <reference types="react" />
import { IPlayerContext } from '../../../../app/Models';
interface IResultView {
    result: IPlayerContext;
    onRepeat: () => void;
}
export declare const ResultView: (props: IResultView) => JSX.Element;
export {};
