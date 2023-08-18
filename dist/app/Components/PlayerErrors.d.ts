import { PureComponent } from 'react';
import { IBackendError, IHistoryContext, IPlayerContext, IVersionInfo } from '../Models';
/**
 * Свойства компонента.
 */
export interface IProps {
    onReload: () => void;
    onExit: () => void;
    errors: IBackendError[];
    playerContext: IPlayerContext;
    history: IHistoryContext[];
    versionInfo: IVersionInfo;
}
/**
 * Состояние компонента.
 *
 * @prop {boolean} showReport Показать отчёт об ошибке.
 * @prop {number} errorIndex Индекс ошибки для отображения.
 */
export interface IState {
    showReport: boolean;
    errorIndex: number;
}
export declare const LABEL_BACK = "\u041D\u0430\u0437\u0430\u0434 \u043A \u043E\u0448\u0438\u0431\u043A\u0435";
export declare const LABEL_EXIT = " \u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C \u0441\u043A\u0440\u0438\u043F\u0442";
export declare const LABEL_RELOAD = "\u041F\u0435\u0440\u0435\u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u0441\u043A\u0440\u0438\u043F\u0442";
/**
 * Ошибки при выполнении скрипта.
 */
export declare class PlayerErrors extends PureComponent<IProps, IState> {
    props: IProps;
    state: IState;
    /**
     * Выход из скрипта.
     */
    handleExit: () => void;
    /**
     * Перезапуск скрипта.
     */
    handleReload: () => void;
    /**
     * Показать отчёт с ошибкой.
     *
     * @param {number} errorIndex Индекс ошибки.
     */
    handleShowReport: (errorIndex: number) => () => void;
    /**
     * Скрыть отчёт с ошибкой.
     */
    handleHideReport: () => void;
    /**
     * Отчёт об ошибке в JSON.
     */
    renderReport: () => JSX.Element;
    /**
     * Отображаем предупреждение о конфиденциальных данных.
     */
    renderAttentionMessage: () => JSX.Element;
    /**
     * Отображаем сообщение о формировании отчёта.
     */
    renderAdditionalInfo: () => JSX.Element;
    /**
     * Информация об ошибке.
     */
    renderError: () => JSX.Element;
    /**
     * Отображаем ошибки плеера.
     */
    render(): JSX.Element;
}
