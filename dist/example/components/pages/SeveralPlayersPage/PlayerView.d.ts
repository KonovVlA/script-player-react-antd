/// <reference types="react" />
import { IPlayerContext, IScriptRs } from "../../../../app/Models";
interface IPlayerView {
    id: string;
    script: IScriptRs;
    onResult: (res: IPlayerContext) => void;
    outsideContext?: IPlayerContext;
    marketPlaceList?: string[];
}
export declare const PlayerView: ({ script, outsideContext, onResult, id }: IPlayerView) => JSX.Element;
export {};
