import 'dayjs/locale/ru';
import React, { MouseEvent, SyntheticEvent } from 'react';
import { ThunkDispatch } from 'redux-thunk';
import { EDefaultWidget } from '../Enums';
import { IBackendError, IBusinessMonitoring, IButtonRouteProps, IContextParam, ICustomWidgetData, IError, IMarketPlace, IPlayerContext, IPlayerContextDiff, IScriptBlockError, IScriptCalculateError, IScriptStore, IValidationError, IVersionInfo, IWidget, IWidgetDefinition, IPlayerProps, PlayerActionsTypes, PlayerStoreType } from '../Models';
/**
 * Свойства компонента из redux store.
 *
 * @prop {string} currentScriptKey Ключ для скрипта.
 * @prop {IScriptStore} scriptStore Данные о скрипте из store.
 * @prop {IScriptBlockError} playerError Ошибка работы плеера.
 * @prop {number} startScreenTime Время начала отображения текущего экрана.
 * @prop {IVersionInfo} versionInfo Информация по версии.
 * @prop {Record<string, ICustomWidgetData>} customWidgetMap Карта кастомных виджетов.
 */
export interface IStateToProps {
    scriptStore: IScriptStore | null;
    playerError: IScriptBlockError | null;
    startScreenTime: number | null;
    versionInfo: IVersionInfo | null;
    customWidgetMap: Record<string, ICustomWidgetData> | null;
}
/**
 * Свойства компонента вызывающие действия redux.
 *
 * @prop {Function} getAndStartScript Получение скрипта.
 * @prop {Function} updateContextDiffAction Изменение части контекста плеера.
 * @prop {Function} goBackAction Возврат на предыдущий экран с восстановлением контекста.
 * @prop {Function} goNextAction Переключить экран на следующий.
 * @prop {Function} showPlayerError Показать ошибку плеера.
 * @prop {Function} showBlockErrors Показать ошибки обработки блока.
 * @prop {Function} showCalculateError Показать ошибку вычисления выражений.
 * @prop {Function} addBMData Добавить данные для Бизнес Мониторинга.
 * @prop {Function} onSwitchToBlock Переход к блоку скрипта.
 * @prop {Function} getVersionAction Получение версии скрипта.
 * @prop {Function} saveScriptHistoryAction Сохраняем историю скрипта во внешнюю функцию.
 * @prop {Function} fetchMarketPlaceListAction Запрос на список маркетплейсов
 * @prop {Function} validateMarketPlaceWidgetsAction Проверка наличия всех кастомных виджетов в карте
 * @prop {Function} clearScriptDataAction Очистка данных скрипта
 */
export interface IPropsDispatch {
    getAndStartScript: () => void;
    updateContextDiffAction: (diff: IPlayerContextDiff, shouldUpdateInterpreter?: boolean) => void;
    goBackAction: () => void;
    goNextAction: () => void;
    showPlayerError: (scriptPlayerError: IError) => void;
    showBlockErrors: (scriptBlockErrors: IError[]) => void;
    showCalculateError: (scriptCalculateError: IError) => void;
    addBMData: (businessMonitoring: IBusinessMonitoring) => void;
    onSwitchToBlock: (blockId: string, saveContext?: boolean) => void;
    getVersionAction: () => void;
    saveScriptHistoryAction: () => void;
    fetchMarketPlaceListAction: (marketPlaceList: IMarketPlace[]) => void;
    validateMarketPlaceWidgetsAction: () => void;
    clearScriptDataAction: () => void;
}
/**
 * Свойства компонента.
 */
export interface IProps extends IPlayerProps, IStateToProps, IPropsDispatch {
}
/**
 * Состояние компонента.
 *
 * @prop {Partial<IBackendError>[]} globalErrors Глобальная ошибка для вывода пользователю.
 * @prop {IValidationError[]} validationErrors Ошибки валидации.
 */
export interface IState {
    globalErrors?: Partial<IBackendError>[];
    validationErrors?: IValidationError[];
    isLoadedCustomWidget: boolean;
}
/**
 * Проигрыватель скриптов.
 */
export declare class Player extends React.Component<IProps, IState> {
    props: IProps;
    state: {
        globalErrors: any[];
        validationErrors: any[];
        isLoadedCustomWidget: boolean;
    };
    /**
     * Отправка ошибки в родительский компонент, с последним переданным результатом, иначе при обновлении происходит многократная отправка.
     * http://jira.ca.sbrf.ru/browse/BPSBSCP-667
     */
    handleOnError: (errors: (IScriptBlockError | IScriptCalculateError)[]) => void;
    shouldComponentUpdate(nextProps: IProps, nextState: IState): boolean;
    componentDidMount(): Promise<void>;
    componentDidUpdate(prevProps: IProps): void | Promise<void>;
    /**
     * Функция проверки и фильтрации выходного контекста
     *
     * @param {IPlayerContext} playerContext Текущий контекст скрипта.
     * @param {IContextParam[]} [outputContext] Описание выходных параметров скрипта.
     *
     * @returns {IPlayerContext|void} Итоговый контекст или выброс ошибки.
     */
    getResultContext(playerContext: IPlayerContext, outputContext?: IContextParam[]): IPlayerContext | void;
    /**
     * Проверка наличия компонента скрипта в дополнительных компонентах плеера.
     *
     * @param {IProps} props пропсы
     */
    validateCustomWidgets: (props: IProps) => void;
    /**
     * Проверяем есть ли в дистрибутиве кастомные компоненты указанные в скрипте.
     *
     * @param {EDefaultWidget | string} widgetName Название компонента из скрипта.
     */
    validateCustomWidgetClass: (widgetName: EDefaultWidget | string) => void;
    /**
     * Получить названия дополнительных компонентов.
     *
     * @param {IWidgetDefinition<any>[]} customWidgets Дополнительные компоненты.
     */
    getCustomWidgetNames: (customWidgets?: IWidgetDefinition<any>[]) => string[];
    /**
     * Получаем список дублированных названий в дополнительных компонентах.
     *
     * @param {IWidgetDefinition<any>[]} customWidgets Дополнительные виджеты.
     */
    getDuplicateCustomWidgets: (customWidgets: IWidgetDefinition<any>[]) => string[];
    /**
     * Проверка скрипта на ошибки.
     *
     * @param {IProps} props Пропсы плеера для проверки
     */
    checkForErrors: (props: IProps) => (IScriptBlockError | IScriptCalculateError)[];
    /**
     * Прокрутка к первой ошибке валидации.
     */
    scrollToFirstError: () => void;
    /**
     * Режим инициализации скрипта.
     *
     * @param {IProps} props пропсы
     */
    initScript: (props: IProps) => Promise<void>;
    /**
     * Обновляем контекст скрипта при изменении внешнего контекста
     *
     * @param {IProps} props Пропсы компонента.
     * @param {IState} state Состояние компонента.
     */
    updateContext: (props: IProps, state: IState) => void;
    /**
     * Очищаем информацию о контексте, который является невидимым на текущем экране, при этом если значение поменялось,
     * и оно есть на предыдущей странице, сохраняем предыдущее значение, вместо нового.
     */
    clearInvisibleContext: () => void;
    /**
     * Проверка всех виджетов на экране.
     */
    validateAllWidgets: () => any[];
    /**
     * Переход на следующий экран.
     */
    handleClickNext: (event: SyntheticEvent | null | MouseEvent, isNeedCustomNextAction?: boolean) => boolean;
    /**
     * Обработка перехода (с кнопки) для которой включена валидация.
     *
     * @param {IWidget<IButtonRouteProps>} widget Виджет кнопки.
     */
    handleValidatedSwitch: (widget: IWidget<IButtonRouteProps>) => (blockId: string, saveContext?: boolean) => void;
    /**
     * Переход на предыдущий экран.
     */
    handleClickPrev: () => void;
    /**
     * Обновление значения компонента.
     *
     * @param {string} contextName Название контекста.
     * @param {any} value Значение контекста.
     * @param {string} [calculatingBlockId] Идентификатор блока расчёта.
     */
    handleChangeWidget: (contextName: string, value: any, calculatingBlockId?: string) => void;
    /**
     * Обработка потери фокуса с виджета.
     *
     * @param {IWidget} widget Компонент.
     */
    handleBlurWidget: (widget: IWidget<any>) => void;
    /**
     * Проверка виджета на обязательность заполнения.
     *
     * @param {IWidget} widget Виджет для проверки.
     */
    hasEmptyValue(widget: IWidget<any>): boolean;
    /**
     * Валидирует виджет.
     * Возвращает сообщение об ошибке или null.
     *
     * @param {IWidget} widget Виджет для валидации.
     */
    validateWidget: (widget: IWidget<any>) => string;
    /**
     * Отображаем ошибки плеера.
     */
    renderErrors: () => JSX.Element;
    /**
     * Асинхронная обработка вывода ошибок блока.
     * Иначе вызывается в стадии render, что приводит к ошибкам (При использовании компонента фаз).
     *
     * @param {IError[]} errors Ошибки из блока.
     */
    handleShowErrors: (errors: IError[]) => void;
    /**
     * Проверка на наличие ошибок в скрипте.
     *
     * @param {IProps} props Свойства компонента.
     * @param {IState} state Состояние компонента.
     */
    hasErrors: (props: IProps, state: IState) => boolean;
    render(): JSX.Element;
}
export declare const mapStateToProps: (store: PlayerStoreType, { scriptName }: IPlayerProps) => IStateToProps;
export declare const mapDispatchToProps: (dispatch: ThunkDispatch<PlayerStoreType, any, PlayerActionsTypes>, { outsideContext, script, scriptName, onChangeHistory, marketplaces }: IPlayerProps) => IPropsDispatch;
declare const _default: (props: IPlayerProps) => JSX.Element;
export default _default;
