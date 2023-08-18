import { EStatus } from "../../app/Enums";
import { IScriptStore, PlayerActionsTypes, PlayerStoreType } from "../../app/Models";
export declare const initialScript: (status: EStatus) => IScriptStore;
export declare const initialPlayerStore: () => PlayerStoreType;
/**
 * Редьюсер для компонента проигрывателя скриптов и переключателя фаз скрипта.
 */
export default function scriptPlayerReducer(store: PlayerStoreType, action: PlayerActionsTypes): PlayerStoreType;
