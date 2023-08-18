/// <reference types="react" />
import { IHistoryContext, IPlayerProps, IRestartAndRunScriptPayload } from "./Models";
/**
 * Очистка информации о скрипте и заполненных данных.
 *
 * @param {string} scriptName Уникальное имя скрипта в редьюсере плеера.
 */
export declare const clearScriptData: (scriptName: string) => {
    readonly type: import("../store/actions/PlayerActionTypes").PlayerActionTypes.PLAYER_CLEAR_SCRIPT_DATA;
    readonly payload: {
        readonly scriptName: string;
    };
};
/**
 * Восстанавливаем состояние скрипта из сохраненных данные
 *
 * @param {string} scriptName Уникальное имя скрипта в редьюсере плеера.
 * @param {IHistoryContext} savedHistory Объект сохраненной ранее истории.
 */
export declare const restoreScriptHistory: (scriptName: string, savedHistory: IHistoryContext[]) => void;
/**
 * Перезапуск скрипта.
 *
 * @param {IRestartAndRunScriptPayload} data
 * @param {IPlayerContext} data.script Скрипт
 * @param {IPlayerContext} data.startContext Изначальный контекст
 * @param {string} data.scriptName Уникальное имя скрипта в редьюсере плеера.
 */
export declare const restartAndRunScript: (data: IRestartAndRunScriptPayload) => void;
/**
 * HOC добавления стора в компонент плеера
 */
export declare const withStore: (Component: any) => (props: IPlayerProps) => JSX.Element;
/**
 * Получение текущего контекста плеера
 *
 * @param {string} scriptName Уникальное имя скрипта в редьюсере плеера.
 */
export declare const getCurrentContext: (scriptName: string) => any;
