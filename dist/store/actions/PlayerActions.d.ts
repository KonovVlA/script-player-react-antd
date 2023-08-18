import { AppThunk, IBusinessMonitoring, ICustomWidgetData, IError, IHistoryContext, IMarketPlace, IPlayerContext, IPlayerContextDiff, IRestartAndRunScriptPayload, IRestorePlayerHistoryPayload, IScriptDetails } from "../../app/Models";
import { PlayerActionTypes } from './PlayerActionTypes';
export declare const PlayerActions: {
    /**
     * Загрузка скрипта плеера.
     *
     * @param {string} scriptName Уникальное имя скрипта в редьюсере плеера.
     */
    startScriptLoadAction: (scriptName: string) => {
        readonly type: PlayerActionTypes.PLAYER_START_SCRIPT_LOAD;
        readonly payload: {
            readonly scriptName: string;
        };
    };
    /**
     * Обновление контекста плеера.
     *
     * @param {string} scriptName Уникальное имя скрипта в редьюсере плеера.
     * @param {IPlayerContextDiff} diff Изменённая часть контекста.
     * @param {boolean} shouldUpdateInterpreter Нужно ли обновлять интерпретатор выражений.
     */
    updateContextDiffAction: (scriptName: string, diff: IPlayerContextDiff, shouldUpdateInterpreter: boolean) => {
        readonly type: PlayerActionTypes.PLAYER_UPDATE_CONTEXT_DIFF;
        readonly payload: {
            readonly scriptName: string;
            readonly diff: IPlayerContextDiff;
            readonly shouldUpdateInterpreter: boolean;
        };
    };
    /**
     * Возврат на предыдущий экран с восстановлением контекста
     *
     * @param {string} scriptName Уникальное имя скрипта в редьюсере плеера.
     */
    goBackAction: (scriptName: string) => {
        readonly type: PlayerActionTypes.PLAYER_GO_BACK;
        readonly payload: {
            readonly scriptName: string;
        };
    };
    /**
     * Очистка информации о скрипте и заполненных данных.
     *
     * @param {string} scriptName Уникальное имя скрипта в редьюсере плеера.
     */
    clearScriptDataAction: (scriptName: string) => {
        readonly type: PlayerActionTypes.PLAYER_CLEAR_SCRIPT_DATA;
        readonly payload: {
            readonly scriptName: string;
        };
    };
    /**
     * Добавление информации о скрипте для работы без BH.
     *
     * @param {string} scriptName Уникальное имя скрипта в редьюсере плеера.
     * @param {IPlayerContext} playerContext Полный стартовый контекст плеера.
     * @param {IScriptDetails} scriptData Данные скрипта для добавления.
     */
    addScriptDataAction: (scriptName: string, scriptData: IScriptDetails, playerContext: IPlayerContext) => {
        readonly type: PlayerActionTypes.PLAYER_GET_SCRIPT_DATA_SUCCESS;
        readonly payload: {
            readonly scriptName: string;
            readonly playerContext: IPlayerContext;
            readonly scriptData: IScriptDetails;
        };
    };
    /**
     * Сброс контекста и истории скрипта на исходное состояние.
     *
     * @param {string} scriptName Уникальное имя скрипта в редьюсере плеера.
     * @param {IPlayerContext} playerContext Изначальный контекст.
     */
    resetScriptAction: (scriptName: any, playerContext: IPlayerContext) => {
        readonly type: PlayerActionTypes.PLAYER_RESTART;
        readonly payload: {
            readonly scriptName: any;
            readonly playerContext: IPlayerContext;
        };
    };
    /**
     * Переключение фокуса между блоками скрипта в процессе воспроизведения
     *
     * @param {string} scriptName Уникальное имя скрипта в редьюсере плеера.
     * @param {string} blockId Идентификатор блока скрипта.
     */
    innerSwitchToBlockAction: (scriptName: string, blockId: string) => {
        readonly type: PlayerActionTypes.PLAYER_FOCUS_BLOCK;
        readonly payload: {
            readonly scriptName: string;
            readonly blockId: string;
        };
    };
    /**
     * Произошла ошибка при работе плеера.
     *
     * @param {string} scriptName Уникальное имя скрипта в редьюсере плеера.
     * @param {IError} scriptPlayerError Ошибка плеера.
     */
    playerErrorAction: (scriptName: string, scriptPlayerError: IError) => {
        readonly type: PlayerActionTypes.PLAYER_ERROR;
        readonly payload: {
            readonly scriptName: string;
            readonly scriptPlayerError: IError;
        };
    };
    /**
     * Ошибки при обработке блоков.
     *
     * @param {string} scriptName Уникальное имя скрипта в редьюсере плеера.
     * @param {IError[]} scriptBlockErrors Ошибки обработки блока.
     */
    blockErrorsAction: (scriptName: string, scriptBlockErrors: IError[]) => {
        readonly type: PlayerActionTypes.PLAYER_SCRIPT_ERROR;
        readonly payload: {
            readonly scriptName: string;
            readonly scriptBlockErrors: IError[];
        };
    };
    /**
     * Ошибки при вычислении выражений.
     *
     * @param {string} scriptName Уникальное имя скрипта в редьюсере плеера.
     * @param {IError} scriptCalculateError Ошибка при вычислении.
     */
    calculateErrorAction: (scriptName: string, scriptCalculateError: IError) => {
        readonly type: PlayerActionTypes.PLAYER_CALCULATE_ERROR;
        readonly payload: {
            readonly scriptName: string;
            readonly scriptCalculateError: IError;
        };
    };
    /**
     * Добавляем данные для Бизнес Мониторинга.
     *
     * @param {string} scriptName Уникальное имя скрипта в редьюсере плеера.
     * @param {IBusinessMonitoring} businessMonitoring История прохождения одного экрана для Бизнес Мониторинга
     */
    addBusinessMonitoringDataToHistoryAction: (scriptName: string, businessMonitoring: IBusinessMonitoring) => {
        readonly type: PlayerActionTypes.PLAYER_ADD_MONITOR_TO_HISTORY;
        readonly payload: {
            readonly scriptName: string;
            readonly businessMonitoring: IBusinessMonitoring;
        };
    };
    /**
     * Очистка истории для Бизнес Мониторинга.
     *
     * @param {string} scriptName Уникальное имя скрипта в редьюсере плеера.
     */
    clearBusinessMonitoringHistoryAction: (scriptName: string) => {
        readonly type: PlayerActionTypes.PLAYER_CLEAR_MONITOR_HISTORY;
        readonly payload: {
            readonly scriptName: string;
        };
    };
    /**
     * Установка времени показа текущего экрана
     *
     * @param {string} scriptName Уникальное имя скрипта в редьюсере плеера.
     */
    onStartShowScreenAction: (scriptName: string) => {
        readonly type: PlayerActionTypes.PLAYER_ON_START_SHOW_SCREEN;
        readonly payload: {
            readonly scriptName: string;
            readonly startScreenTime: number;
        };
    };
    /**
     * Сброс текущего контекста экрана.
     *
     * @param {string} scriptName Уникальное имя скрипта в редьюсере плеера.
     */
    resetScreenContextAction: (scriptName: string) => {
        readonly type: PlayerActionTypes.RESET_SCREEN_CONTEXT;
        readonly payload: {
            readonly scriptName: string;
        };
    };
    /**
     * Очистка ошибки при загрузке скрипта.
     *
     * @param {string} scriptName Уникальное имя скрипта в редьюсере плеера.
     */
    clearErrorGetScriptDataAction: (scriptName: string) => {
        readonly type: PlayerActionTypes.PLAYER_GET_SCRIPT_DATA_ERROR_CLEAR;
        readonly payload: {
            readonly scriptName: string;
        };
    };
    /**
     * Очистка ошибки при обработке блока.
     *
     * @param {string} scriptName Уникальное имя скрипта в редьюсере плеера.
     * @param {number} errorIndex Индекс ошибки.
     */
    clearErrorPlayerScriptAction: (scriptName: string, errorIndex: number) => {
        readonly type: PlayerActionTypes.PLAYER_SCRIPT_ERROR_CLEAR;
        readonly payload: {
            readonly scriptName: string;
            readonly errorIndex: number;
        };
    };
    /**
     * Очистка ошибки при обработке плеера.
     *
     * @param {string} scriptName Уникальное имя скрипта в редьюсере плеера.
     */
    clearErrorPlayerAction: (scriptName: string) => {
        readonly type: PlayerActionTypes.PLAYER_ERROR_CLEAR;
        readonly payload: {
            readonly scriptName: string;
        };
    };
    /**
     * Очистка ошибки при вычислении выражений.
     *
     * @param {string} scriptName Уникальное имя скрипта в редьюсере плеера.
     * @param {number} errorIndex Индекс ошибки.
     */
    clearErrorPlayerCalculateAction: (scriptName: string, errorIndex: number) => {
        readonly type: PlayerActionTypes.PLAYER_CALCULATE_ERROR_CLEAR;
        readonly payload: {
            readonly scriptName: string;
            readonly errorIndex: number;
        };
    };
    /**
     * Перезапуск скрипта.
     *
     * @param {string} scriptName Уникальное имя скрипта в редьюсере плеера.
     * @param {IPlayerContext} startContext Изначальный контекст.
     */
    restartScript: (scriptName: string, startContext: IPlayerContext) => {
        readonly type: PlayerActionTypes.PLAYER_RESTART_SCRIPT;
        readonly payload: {
            readonly scriptName: string;
            readonly startContext: IPlayerContext;
        };
    };
    /**
     * Получение версии приложения.
     *
     * @param {string} scriptName Уникальное имя скрипта в редьюсере плеера.
     */
    getVersionAction: (scriptName: string) => {
        readonly type: PlayerActionTypes.PLAYER_GET_VERSION;
        readonly payload: {
            readonly scriptName: string;
        };
    };
    /**
     * Восстановление истории скрипта.
     *
     * @param {string} scriptName Уникальное имя скрипта в редьюсере плеера.
     * @param {IHistoryContext[]} historyPayload Сохраненная история скрипта.
     */
    restorePlayerHistoryAction: (scriptName: string, historyPayload: Omit<IRestorePlayerHistoryPayload, 'scriptName'>) => {
        readonly type: PlayerActionTypes.PLAYER_RESTORE_SCRIPT_HISTORY;
        readonly payload: {
            readonly playerContext: IPlayerContext;
            readonly currentBlockId: string;
            readonly history: IHistoryContext[];
            readonly scriptName: string;
        };
    };
    /**
     * Установка карты UI-компонентов из маркетплейсов
     *
     * @param {string} scriptName Уникальное имя скрипта в редьюсере плеера.
     * @param {Record<string, ICustomWidgetData>} customWidgetMap Карта UI-компонентов из маркетплейсов
     */
    setCustomWidgetMapAction: (scriptName: string, customWidgetMap: Record<string, ICustomWidgetData>) => {
        readonly type: PlayerActionTypes.PLAYER_SET_CUSTOM_WIDGET_MAP;
        readonly payload: {
            readonly scriptName: string;
            readonly customWidgetMap: Record<string, ICustomWidgetData>;
        };
    };
};
/**
 * Перезапуск скрипта.
 *
 * @param {Object} config
 * @param {IPlayerContext} config.script Скрипт
 * @param {IPlayerContext} config.startContext Изначальный контекст
 * @param {string} config.scriptName Уникальное имя скрипта в редьюсере плеера.
 */
export declare const restartAndRunScriptAction: ({ script, startContext, scriptName }: IRestartAndRunScriptPayload) => AppThunk;
/**
 * Переход к следующему блоку текущего скрипта.
 *
 * @param {string} scriptName Уникальное имя скрипта в редьюсере плеера.
 */
export declare const goNextAction: (scriptName: string) => AppThunk;
/**
 * Переход к определённому блоку скрипта.
 *
 * @param {string} scriptName Уникальное имя скрипта в редьюсере плеера.
 * @param {string} blockId Идентификатор блока для перехода.
 * @param {boolean} saveContext Сохранять ли контекст при переходе.
 */
export declare const switchToBlock: (scriptName: string, blockId: string, saveContext?: boolean) => AppThunk;
/**
 * Переход между фазами скрипта.
 *
 * @param {string} phaseName Имя фазы скрипта.
 * @param {string} scriptName Уникальное имя скрипта в редьюсере плеера.
 */
export declare const switchToPhase: (phaseName: string, scriptName: string) => AppThunk;
/**
 * Восстанавливаем состояние скрипта из сохраненных данные
 *
 * @param {string} scriptName Уникальное имя скрипта в редьюсере плеера.
 * @param {IHistoryContext} savedHistory Объект сохраненной ранее истории.
 */
export declare const restoreScriptHistoryAction: (scriptName: string, savedHistory: IHistoryContext[]) => AppThunk;
/**
 * Сохраняем историю скрипта во внешнюю функцию
 *
 * @param {string} scriptName Уникальное имя скрипта в редьюсере плеера.
 * @param {Function} saveScriptHistoryFunction Внешняя функция сохранения скрипта
 */
export declare const saveScriptHistoryAction: (scriptName: string, saveScriptHistoryFunction: (history: IHistoryContext[]) => void) => AppThunk;
/**
 * Загружаем карту кастомных виджетов из полученных маркетплейсов
 *
 * @param {string} scriptName Уникальное имя скрипта в редьюсере плеера.
 * @param {IMarketPlace[]} marketPlaceList Маркетплейсы.
 */
export declare const fetchMarketPlaceListAction: (scriptName: string, marketPlaceList: IMarketPlace[]) => AppThunk;
/**
 * Проверка доступности кастомных виджетов
 *
 * @param {string} scriptName Уникальное имя скрипта в редьюсере плеера.
 * @param {IMarketPlace[]} [marketplaces] Перечень маркетплейсов.
 */
export declare const validateMarketPlaceWidgetsAction: (scriptName: string, marketplaces?: IMarketPlace[]) => AppThunk;
