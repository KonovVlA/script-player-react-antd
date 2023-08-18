import { Interpreter, IToken } from '@sber-ssp-ui/spruce';
import React, { JSXElementConstructor, SyntheticEvent } from 'react';
import { ThunkAction } from 'redux-thunk';
import { PlayerActions } from "../store/actions/PlayerActions";
import { EBlockType, EComponentType, EDefaultWidget, EErrorType, EPropRsType, EResultType, EStatus } from './Enums';
export declare type TLowercase<T extends string> = T | Lowercase<T>;
export declare type TEBlockType = EBlockType | keyof typeof EBlockType;
export declare type TEPropRsType = EPropRsType | Lowercase<keyof typeof EPropRsType>;
export declare type TEComponentType = EComponentType | Lowercase<keyof typeof EComponentType>;
export declare type TSection = EPropRsType.STRING | EPropRsType.TEMPLATE | EPropRsType.LINK;
export declare type TESection = TSection | Lowercase<TSection>;
export declare type Nullable<T> = T | null;
/**
 * Интерфейс для различных опций (в том числе для аккордеона).
 *
 * @prop {T} value Значение (или содержание аккордеона).
 * @prop {string} label Метка для отображения (или заголовок аккордеона).
 */
export interface IOption<T> {
    value: T;
    label: string;
    select?: string;
}
/**
 * Единый интерфейс для ошибок системы.
 *
 * @prop {EErrorType} errorType Тип ошибки.
 * @prop {string} file Файл, где возникла ошибка.
 * @prop {number} line Строка, где возникла ошибка.
 * @prop {number} column Колонка, где возникла ошибка.
 */
export interface IError extends Partial<IBackendError>, Partial<IScriptBlockError>, Partial<ErrorEvent>, Partial<IErrorLocation>, Partial<IWidgetError> {
    errorType: EErrorType;
    file?: string;
    line?: number;
    column?: number;
}
/**
 * Данные ошибок для отправки на сервер.
 *
 * @prop {IError[]} errors Список ошибок.
 */
export interface IErrorRq extends IScriptAdminIdentifier {
    errors: IError[] | {};
    sessionId: string;
}
/**
 * Store для скрипта.
 *
 * TODO: Много свойств. Нужно разбить по смыслу.
 *
 * @prop {string} pid Уникальный идентификатор для проигрываемого скрипта.
 * @prop {EStatus} status Статус загрузки скрипта.
 * @prop {IScriptDetails} script Данные скрипта.
 * @prop {IBackendError} error Ошибки при загрузке скрипта.
 * @prop {IScriptBlockError[]} scriptBlockErrors Ошибки при обработке блоков скрипта.
 * @prop {IHistoryContext[]} history Копии контекста, для перехода к предыдущему состоянию контекста между блоками.
 * @prop {IMonitoringHistory[]} businessMonitoringHistory История прохождения скрипта для Бизнес Мониторинга.
 * @prop {IPlayerContext} playerContext Контекст скрипта.
 * @prop {IInterpreter} interpreter Интерпретатор выражений.
 * @prop {string} currentBlockId Идентификатор блока, на котором находится проигрыватель.
 * @prop {number} startScreenTime Время входа на блок Экрана.
 * @prop {string} initialBlockContext Изначальный контекст блока, который был на момент переключения на него.
 * FIXME: initialBlockContext нужен только потому что история ведётся только по экранам и нет контекста для первого экрана.
 * @prop {IBlockScreen} visibleScreenBlock Видимый блок для отображения.
 */
export interface IScriptStore {
    pid: string;
    status: EStatus;
    script: IScriptDetails;
    error: IError;
    scriptBlockErrors: IScriptBlockError[];
    scriptCalculateErrors: IScriptCalculateError[];
    history: IHistoryContext[];
    businessMonitoringHistory: IBusinessMonitoring[];
    playerContext: IPlayerContext;
    interpreter: IInterpreter;
    currentBlockId: string;
    startScreenTime: number;
    initialBlockContext: IPlayerContext;
    visibleScreenBlock: IBlockScreen;
}
export declare type PlayerStoreType = Record<string, IScriptPlayerStore>;
/**
 * Redux store для проигрывателя и переключателя фаз.
 *
 * @prop {EStatus} status Статус скрипта
 * @prop {IScriptsStore} scripts Данные по скриптам.
 * @prop {IError} error Ошибка плеера.
 * @prop {IVersionInfo} customWidgetMap информация по версии.
 * @prop {IVersionInfo} [versionInfo] информация по версии.
 */
export interface IScriptPlayerStore {
    status: EStatus;
    script: IScriptStore;
    error: IError;
    customWidgetMap: Record<string, ICustomWidgetData>;
    versionInfo?: IVersionInfo;
}
/**
 * Redux store для администрирования.
 *
 * @prop {EStatus} groupListLoadingStatus Статус загрузки данных по группам скриптов.
 * @prop {ERoles[]} rights Права пользователя на подсистему ЕФС.
 * @prop {string} selectSubsystem Выбранная подсистема.
 * @prop {boolean} isRightLoading Флаг загрузки данных о правах.
 * @prop {boolean} isChangeStatusLoading Флаг изменения статуса скрипта.
 * @prop {boolean} isCreateGroupLoading Флаг загрузки создания группы скриптов.
 * @prop {boolean} isScriptsLoading Флаг загрузки данных о скриптах.
 * @prop {boolean} isDeleteGroupLoading Флаг загрузки удаления группы скриптов.
 * @prop {boolean} isDeleteScriptLoading Флаг загрузки удаления скрипта.
 * @prop {IScriptGroupIdentifier[]} groups Группы скриптов.
 * @prop {IScriptDetails[]} scripts Данные о скриптах подсистемы.
 * @prop {IBackendError} errorGetRights Ошибка загрузки прав пользователя по подсистеме ЕФС.
 * @prop {IBackendError} errorChangeStatus Ошибка при изменении статуса скрипта.
 * @prop {IBackendError} errorScriptsList Ошибка загрузки данных по скриптам.
 * @prop {IBackendError} errorGroupList Ошибка загрузки данных по группам скриптов.
 * @prop {IBackendError} errorDownloadScript Ошибка при скачивании файла.
 * @prop {IBackendError} errorCreateGroup Ошибка загрузки создания группы скриптов.
 * @prop {IBackendError} errorDeleteGroup Ошибка загрузки удаления группы скриптов.
 * @prop {IBackendError} errorDeleteScript Ошибка загрузки удаления скрипта.
 * @prop {IVersionInfo} versionInfo Информация по версии.
 */
export interface IScriptAdminStore {
    groupListLoadingStatus: EStatus;
    rights: IPermissionsRs[];
    selectSubsystemCode: string;
    isRightLoading: boolean;
    isChangeStatusLoading: boolean;
    isCreateGroupLoading: boolean;
    isScriptsLoading: boolean;
    isDeleteGroupLoading: boolean;
    isDeleteScriptLoading: boolean;
    groups: IScriptGroupIdentifier[];
    scripts: IScriptInfo[];
    errorGetRights: IBackendError;
    errorChangeStatus: IBackendError;
    errorScriptsList: IBackendError;
    errorGroupList: IBackendError;
    errorDownloadScript: IBackendError;
    errorCreateGroup: IBackendError;
    errorDeleteGroup: IBackendError;
    errorDeleteScript: IBackendError;
    versionInfo: IVersionInfo;
}
/**
 * @prop {string} scriptName Уникальное имя скрипта в редьюсере плеера.
 */
export interface IProductScriptNamePayload {
    scriptName: string;
}
export interface ISwitchToBlock {
    blockId: string;
    saveContext: boolean;
}
/**
 * Данные для рестарта скрипта
 *
 * @prop {string} scriptName Уникальное имя скрипта в редьюсере плеера.
 * @prop {IPlayerContext} playerContext Стартовый контекст.
 */
export interface IRestartScriptPayload extends IProductScriptNamePayload {
    playerContext: IPlayerContext;
}
/**
 * Данные для перезапуска скрипта
 *
 * @prop {string} scriptName Уникальное имя скрипта в редьюсере плеера.
 * @prop {IPlayerContext} startContext Стартовый контекст.
 * @prop {IScriptRs} script Скрипт.
 */
export interface IRestartAndRunScriptPayload extends IProductScriptNamePayload {
    startContext: IPlayerContext;
    script: IScriptRs;
}
/**
 * Данные для перехода к определенному блоку
 *
 * @prop {string} scriptName Уникальное имя скрипта в редьюсере плеера.
 * @prop {string} blockId id блока.
 */
export interface IPlayScriptBlockByIdPayload extends IProductScriptNamePayload {
    blockId: string;
}
export interface ISwitchToPhase {
    phaseName: string;
}
/**
 * Информация о состоянии скрипта
 *
 * @prop {string} currentBlockId id текущего блока
 * @prop {IPlayerContext} IPlayerContext объект контекста
 * @prop {IHistoryContext[]} history массив объектов истории
 */
export interface IRestorePlayerHistoryPayload extends IProductScriptNamePayload {
    playerContext: IPlayerContext;
    currentBlockId: string;
    history: IHistoryContext[];
}
/**
 * Основная информация о ошибке.
 *
 * @prop {string} [text] Текст ошибки.
 * @prop {string} [title] Заголовок ошибки.
 * @prop {string} [dateTime] Дата и время возникновения ошибки.
 */
export interface IErrorBase {
    text?: string;
    title?: string;
    dateTime?: string;
}
/**
 * Информация по ошибке, возвращаемая сервером.
 *
 * @prop {string} [code] Код ошибки.
 * @prop {string} [system] Система, вернувшая ошибку.
 * @prop {string} [uuid] Uuid код ошибки.
 */
export interface IBackendError extends IErrorBase {
    code?: string;
    system?: string;
    uuid?: string;
}
/**
 * Ошибка при неправильном запросе к серверу.
 */
export interface IRequestError {
    data: string;
    status: string;
    statusText: string;
}
/**
 * Идентификация местоположения ошибки.
 *
 * @prop {string} additionalId Идентификатор выражения, по которому можно определить где произошла ошибка.
 * @prop {string} blockId Идентификатор блока с ошибкой.
 */
export interface IErrorLocation {
    additionalId: string;
    blockId: string;
}
/**
 * Стандартные ошибки с заголовком.
 *
 * @prop {string} title Заголовок.
 */
export interface IErrorExceptions extends IErrorLocation, Partial<Error> {
    title: string;
}
/**
 * Общий интерфейс для ответов с сервера.
 *
 * @prop {ICommonDocument} [body] Запрашиваемые данные с сервера. Приходит, когда success === true. Может быть любым объектом или массивом.
 * @prop {IBackendError} [error] Сообщение об ошибке с сервера. Приходит, когда success === false.
 * @prop {boolean} success Флаг успешности формирования корректного ответа.
 */
export interface IBackendAnswer<T> {
    body?: T;
    error?: IBackendError;
    success: boolean;
}
/**
 * Группа скриптов.
 *
 * @prop {string} groupName Идентификатор группы скриптов.
 * @prop {string} subsystemCode Код подсистемы.
 */
export interface IScriptGroupIdentifier {
    groupName: string;
    subsystemCode: string;
}
/**
 * Информация по пилотированию скрипта.
 *
 * @prop {boolean} complete Флаг окончания пилотирования и возможности перейти в тираж.
 * @prop {string} endDate Дата окончания пилотирования.
 * @prop {number} minRunCount Необходимое количество запусков скрипта в режиме пилотирования для перехода в тираж.
 */
export interface IPilotInfo {
    completed: boolean;
    endDate: string;
    minRunCount: number;
}
/**
 * Данные о скрипте.
 *
 * @prop {boolean} [canRollback] Флаг возможности отката скрипта.
 * @prop {string} subjectId Идентификатор объекта-цели выполнения скрипта.
 * @prop {string} subjectName Название объекта-цели выполнения скрипта.
 * @prop {string} groupName Имя группы скриптов, к которым относится данный скрипт.
 * @prop {IPilotInfo} pilotInfo Информация по пилотированию.
 * @prop {string} dateCreate Дата создания скрипта (дата начала пилотирования).
 * @prop {number} runCounter Количество запусков.
 * @prop {string} [version] Идентификатор версии скрипта.
 */
export interface IScriptInfo {
    canRollback?: boolean;
    subjectId: string;
    subjectName: string;
    groupName: string;
    pilotInfo: IPilotInfo;
    dateCreate: string;
    runCounter: number;
    version?: string;
}
/**
 * Модель скрипта, позволяющая однозначно идентифицировать его в системе.
 * Используется при работе со скриптами в администрировании.
 *
 * @prop {string} subjectId Идентификатор объекта-цели выполнения скрипта.
 * @prop {string} version Идентификатор версии скрипта.
 * @prop {string} [deleteComment] Комментарий при удалении скрипта.
 */
export interface IScriptAdminIdentifier extends IScriptGroupIdentifier {
    subjectId: string;
    version: string;
    deleteComment?: string;
}
/**
 * Модель скрипта для работы с плеером.
 *
 * @prop {string} subjectId Идентификатор объекта-цели выполнения скрипта.
 */
export interface IScriptPlayerIdentifier extends IScriptGroupIdentifier {
    subjectId: string;
}
/**
 * Параметры для компонента.
 */
export interface IWidgetProps {
    [name: string]: any;
}
/**
 * Компонент в блоке экрана.
 *
 * @prop {number} [index] Уникальный индекс виджета.
 * @prop {EDefaultWidget | string} component Название компонента.
 * @prop {T} props Параметры компонента.
 * @prop {number} rowNumber Номер строки.
 * @prop {number} width Ширина компонента (Ширина строки =< 12).
 * @prop {number} offset Отступ слева от соседнего компонента.
 * @prop {IValidator[]} validators Правила валидации.
 * @prop {boolean} [togglesValidation] Запускает валидацию (для кнопок перехода).
 * @prop {IExpressionWithOriginal[]} readOnly Только чтение.
 * @prop {TEComponentType} componentType Источник виджета.
 * @prop {string} [inlineStyles] CSS стили компонента.
 */
export interface IWidget<T> extends IWithContextName {
    index?: number;
    component: EDefaultWidget | string;
    props: T;
    rowNumber: number;
    width: number;
    offset: number;
    validators: IValidator[];
    togglesValidation?: boolean;
    readOnly?: IExpressionWithOriginal[];
    componentType?: TEComponentType;
    inlineStyles?: string;
}
export interface ICustomWidget<T> extends IWidget<T> {
    /** Версия виджета */
    version?: string;
}
export interface IMarketPlace {
    baseUrl: string;
    name: string;
}
interface ICustomWidgetLang {
    lang: string;
    value: string;
}
interface ICustomWidgetVersion {
    /** Url маркетплейса */
    baseUrl: string;
    /** Версия виджета */
    version: string;
}
export interface ICustomWidgetData {
    /** Название виджета */
    name: string;
    /** Для какой платформы виджет: web, ios, android */
    platform: 'web' | 'ios' | 'android';
    /** Имена виджета в разных локалях */
    title: ICustomWidgetLang[];
    /** Доступные версии виджета */
    versions: ICustomWidgetVersion[];
    /** Список названий файлов с внешними стилями */
    styles?: string[];
}
/** Отфильтрованные данные по виджетам с сервера */
export interface IFilteredFulfilledWidgetsData {
    status: 'fulfilled';
    value: {
        widgets: ICustomWidgetData[];
    };
}
/**
 * Блок расчёта контекста.
 *
 * @prop {string} contextName переменная контекста.
 */
export interface ICalculation extends IExpressionWithOriginal {
    contextName: string;
}
/**
 * Базовый класс для блоков.
 *
 * @prop {string} id Идентификатор блока.
 * @prop {string} name Название блока.
 * @prop {TEBlockType} type Тип блока.
 * @prop {number} x Координаты блока по оси X.
 * @prop {number} y Координаты блока по оси Y.
 * @prop {Nullable<string>} [comment] Комментарий к блоку.
 * @prop {string} [phase] Фаза, к которой относится блок.
 * @prop {boolean} [phaseStart] Является ли первым в фазе.
 */
export interface IBlockBase {
    id: string;
    name: string;
    type: TEBlockType;
    x: number;
    y: number;
    comment?: string;
    phase?: Nullable<string>;
    phaseStart?: Nullable<boolean>;
}
/**
 * Блок старта скрипта.
 *
 * @prop {string} [nextId] Ссылка на следующий блок.
 */
export interface IBlockStart extends IBlockBase {
    nextId?: Nullable<string>;
}
export declare type TWidget = IWidget<IWidgetProps | IButtonRouteProps | IScreenMenuProps> | ICustomWidget<IWidgetProps | IButtonRouteProps | IScreenMenuProps>;
/**
 * Блок экрана.
 *
 * @prop {string} [nextId] Ссылка на следующий блок.
 * @prop {string} [calculatingBlockId] Блок для динамического пересчёта экрана.
 * @prop {TWidget[]} [widgets] Компоненты для отображения экрана.
 * @prop {IVisibility} [visibility] Правила отображения блока с виджетами внутри экрана.
 * @prop {boolean} hasBack Флаг наличия стандартной кнопки "Назад".
 * @prop {boolean} hasNext Флаг наличия стандартной кнопки "Далее".
 * @prop {string} backLabel Метка стандартной кнопки "Назад".
 * @prop {string} nextLabel Метка стандартной кнопки "Далее".
 * @prop {IValidator[]} nextValidators Правила валидации стандартной кнопки "Далее".
 */
export interface IBlockScreen extends IBlockBase {
    nextId?: Nullable<string>;
    calculatingBlockId?: string;
    widgets?: TWidget[];
    visibility?: IVisibility;
    hasBack: boolean;
    hasNext: boolean;
    backLabel: string;
    nextLabel: string;
    nextValidators: IValidator[];
    sections?: ISection[];
}
/**
 * Правила отображения блока с виджетами внутри экрана в ответе с сервера.
 *
 * @prop {number} rowNumber Номер блока.
 */
export interface IVisibilityRs extends IExpressionWithOriginal {
    rowNumber: number;
}
/**
 * Права пользователя в подсистеме ЕФС в ответе с сервера.
 *
 * @prop {ERoles[]} rights Роли пользователя.
 * @prop {string} subsystemCode Код подсистемы.
 * @prop {string} subsystemLabel Код подсистемы.
 */
export interface IPermissionsRs {
    subsystemCode: string;
    subsystemLabel: string;
}
/**
 * Правила отображения блока с виджетами внутри экрана.
 *
 * @prop {number} rowNumber Номер блока.
 * @prop {ITokenCustom} expression Выражение для расчёта отображения блока, должно возвращать true/false.
 */
export interface IVisibility {
    [rowNumber: number]: ITokenCustom;
}
/**
 * @prop {string} [contextName] Имя контекста для изменения.
 * @prop {boolean} [isRequired] Признак обязательного заполнения поля.
 */
export interface IWithContextName {
    contextName?: string;
    isRequired?: boolean;
}
/**
 * Блок расчёта.
 *
 * @prop {string} [nextId] Ссылка на следующий блок.
 * @prop {ICalculation[]} [calculations] Массив расчётов.
 */
export interface IBlockCalculation extends IBlockBase {
    nextId?: Nullable<string>;
    calculations?: ICalculation[];
}
/**
 * Блок роутинга.
 *
 * @prop {string} nextId Ссылка на следующий блок по умолчанию.
 * @prop {IRouteCondition[]} routes Массив условий роутинга.
 */
export interface IBlockRouter extends IBlockBase {
    nextId: string;
    routes: IRouteCondition[];
}
/**
 * Блок бизнес мониторинга.
 *
 * @prop {boolean} active Включена ли отправка данных в ФП Бизнес Мониторинг.
 * @prop {string} [nextId] Ссылка на следующий блок.
 */
export interface IBlockBusinessMonitoring extends IBlockBase {
    active: boolean;
    nextId?: Nullable<string>;
}
/**
 * Представление одного из условий роутера.
 *
 * @prop {string} nextId Ссылка на блок для перехода при возврате "правдивого" значения выражением.
 */
export interface IRouteCondition extends IExpressionWithOriginal {
    nextId: string;
}
/**
 * Шаг в истории прохождения скрипта.
 *
 * @prop {string} blockId Идентификатор блока.
 * @prop {EBlockType} blockType Тип блока.
 * @prop {IPlayerContext} playerContext Контекст для этого блока.
 */
export interface IHistoryContext {
    blockId: string;
    blockType: TEBlockType;
    playerContext: IPlayerContext;
}
/**
 * Контекст прохождения скрипта.
 */
export interface IPlayerContext {
    [name: string]: any;
}
/**
 * Описание изменений в контексте.
 *
 * contextPath - путь, по которому нужно изменить значение в контексте.
 */
export interface IPlayerContextDiff {
    [contextPath: string]: any;
}
/**
 * Ошибка при обработке блоков.
 *
 * @prop {any} [exception] Служебная информация об ошибке.
 */
export interface IScriptBlockError extends IBackendError, Partial<IErrorLocation> {
    exception?: any;
}
/**
 * Информация о положении виджета внутри блока экрана.
 *
 * @prop {number} row Номер строки виджета в блоке.
 * @prop {number} column Номер столбца виджета в строке блока.
 */
export interface IWidgetErrorInfo {
    row: number;
    column: number;
}
/**
 * Ошибка при обработке виджетов.
 *
 * @prop {IWidgetErrorInfo} widgetInfo Информация о виджете, в котором произошла ошибка.
 */
export interface IWidgetError extends IBackendError, Partial<IErrorLocation> {
    widgetInfo: IWidgetErrorInfo;
}
/**
 * Ошибка при вычислении выражений.
 *
 * @prop {string} [message] Текст ошибки.
 * @prop {any} [exception] Служебная информация об ошибке.
 */
export interface IScriptCalculateError {
    message?: string;
    stack?: any;
}
/**
 * Макросы для расчётов.
 */
export interface IMacrosDefinition {
    [name: string]: ITokenCustom;
}
export declare type TBlock = IBlockStart | IBlockScreen | IBlockCalculation | IBlockRouter | IBlockBusinessMonitoring;
/**
 * Данные скрипта.
 *
 * @prop {TBlock} [blocks] Информация о блоках.
 * @prop {IMacrosDefinition} [macros] Макросы для расчётов.
 * @prop {IContextParam[]} [inputContext] Входные параметры.
 * @prop {IContextParam[]} [outputContext] Выходные параметры.
 */
export interface IScriptDetails extends IScriptBase {
    blocks?: TBlock[];
    macros?: IMacrosDefinition;
    inputContext?: IContextParam[];
    outputContext?: IContextParam[];
}
export interface IBusinessMonitoringPayload extends IProductScriptNamePayload {
    businessMonitoring: IBusinessMonitoring;
}
/**
 * Общие данные о скрипте.
 *
 * @prop {string} [subject] Идентификатор субъекта скрипта.
 * @prop {string} [label] Метка (Наименование) скрипта.
 * @prop {string[]} phases Фазы скрипта.
 */
export interface IScriptBase {
    subject?: string;
    label?: string;
    phases?: string[];
}
/**
 * Обязательные базовые свойства компонентов.
 *
 * @prop {T} value Значение для компонент, т.е. часть контекста, с которым он работает (задаётся в скрипте).
 * @prop {Function} onChange Вызывается при изменении значения, возвращает новое значение.
 * @prop {Function} [onError] Вызывается при ошибке в виджете.
 * @prop {IPlayerContext} playerContext Полный текущий контекст плеера (readOnly).
 * @prop {Function} [onBlur] Обязательные параметр при использовании валидации. Вызывается при потери фокуса.
 * @prop {string} [errorMessage] Обязательные параметр при использовании валидации. Сообщение об ошибке.
 * @prop {boolean} [hasError] Обязательные параметр при использовании валидации. Флаг наличия ошибки.
 * @prop {boolean} [isRequired] Признак обязательности.
 * @prop {boolean} [onlyShow] Признак только просмотр.
 * @props {string} [hint] Необязательный параметр для подсказки у виджета
 */
export interface IWidgetBaseProps<T> {
    value: T;
    onChange: (value: T) => void;
    onError?: (errors: IErrorBase[]) => void;
    playerContext: IPlayerContext;
    onBlur?: () => void;
    errorMessage?: string;
    hasError?: boolean;
    isRequired?: boolean;
    onlyShow?: boolean;
    scriptName: string;
    hint?: string;
}
export interface ICustomWidgetBaseProps<T> extends IWidgetBaseProps<T> {
    additionProps: {
        componentName: string;
        url: string;
    };
}
/**
 * Пользовательские компоненты для отображения.
 *
 * @prop {string} [name] Название компонента, если не передано будет использовано displayName компонента component.
 * @prop {IWidgetClass} component Класс компонента.
 * @prop {IProps} [props] Параметры компонента для инициализации.
 */
export interface IWidgetDefinition<P extends IWidgetBaseProps<any>> {
    name?: string;
    component: IWidgetClass<P> | IWidgetClassSFC<P>;
    props?: Partial<P>;
}
/**
 * Основной интерфейс класса компонентов в системе.
 */
export interface IWidgetClass<P extends IWidgetBaseProps<any> | IWidgetWithRouteProps> extends React.ComponentClass<P> {
    new (props?: P, context?: any): WidgetClass<P, {} | void>;
}
/**
 * Интерфейс SFC компонентов в системе.
 */
export interface IWidgetClassSFC<P extends IWidgetBaseProps<any> | IWidgetWithRouteProps> extends React.StatelessComponent<P> {
}
/**
 * Основной класс компонентов системы.
 */
export declare abstract class WidgetClass<P extends IWidgetBaseProps<any> | IWidgetWithRouteProps, S> extends React.Component<P, S> {
}
/**
 * Классы компонентов системы без state.
 */
export declare abstract class WidgetClassStateless<P extends IWidgetBaseProps<any> | IWidgetWithRouteProps> extends React.Component<P, {}> {
}
/**
 * Данные скрипта в ответе с сервера.
 *
 * @prop {IBlockRs[]} [blocks] Информация о блоках.
 * @prop {IMacroDefinitionRs[]} [macros] Макросы для расчётов.
 */
export interface IScriptRs extends Omit<IScriptDetails, 'macros' | 'blocks'> {
    blocks?: IBlockRs[];
    macros?: IMacroDefinitionRs[];
}
/**
 * Данные по блоку в ответе с сервера.
 *
 * @prop {IWidgetRs[]} widgets Виджеты.
 * @prop {IVisibilityRs[]} visibility Правила отображения строк у блока Экрана.
 */
export declare type IBlockRs = TBlock & {
    widgets?: IWidgetRs[];
    visibility?: IVisibilityRs[];
};
/**
 * Данные по виджету в ответе с сервера.
 *
 * @prop {IPropsRs[]} props Свойства (props) компонента виджета.
 */
export interface IWidgetRs extends Omit<TWidget, 'props'> {
    props: IPropsRs[];
}
/**
 * Данные по свойствам виджета в ответе с сервера.
 *
 * @prop {string} name Имя свойства.
 * @prop {TEPropRsType} type Тип свойства.
 * @prop {IPropsRs[]} Дочерние свойства (члены массива или ключи объекта).
 * @prop {number | string | boolean | IExpressionWithOriginal} value Значение свойства.
 */
export interface IPropsRs {
    name?: string;
    type: TEPropRsType;
    props?: IPropsRs[];
    value?: number | string | boolean | IExpressionWithOriginal;
}
/**
 * Макросы для расчётов в ответе с сервера.
 *
 * @prop {string} functionName Имя макроса.
 */
export interface IMacroDefinitionRs extends IExpressionWithOriginal {
    functionName: string;
}
/**
 * История прохождения одного экрана для Бизнес Мониторинга.
 *
 * @prop {string} screenId Идентификатор экрана.
 * @prop {string} name Название экрана.
 * @prop {number} startTime Время входа в блок экрана.
 * @prop {number} endTime Время ухода с блока экрана.
 */
export interface IBusinessMonitoring {
    screenId: string;
    name: string;
    startTime: number;
    endTime: number;
}
/**
 * Данные для передачи в Бизнес Мониторинг.
 *
 * @prop {string} pid Уникальный идентификатор для .
 * @prop {IMonitoringHistory[]} history .
 */
export interface IMonitoringData extends IScriptPlayerIdentifier {
    pid: string;
    history: IBusinessMonitoring[];
}
/**
 * Свойства компонента.
 *
 * @prop {IScriptRs} script Объект скрипта.
 * @prop {string} scriptName Уникальное имя скрипта в редьюсере плеера.
 * @prop {Function} onResult Отдаём результат прохождения скрипта.
 * @prop {IPlayerContext} [outsideContext] Предзаполненый контекст для проигрывателя.
 * @prop {IWidgetDefinition[]} [customWidgets] Пользовательские компоненты.
 * @prop {Function} [onPhaseChange] Вызывается при смене фазы.
 * @prop {Function} [onError] Выводит список отображений об ошибках.
 * @prop {string} [className] Css класс, не используется. Нужен для временного фикса в ИС.
 * @prop {boolean} [onlyShow] Режим "только просмотр" для просмотра скрипта, без возможности изменения.
 * @prop {string} [onlyShowNextLabel] Название для перехода к следующему блоку при режиме "только просмотр".
 * @prop {Function} [onChangeHistory] Пользовательская функция сохранения истории скрипта.
 * @prop {IMarketPlace[]} marketplaces Перечень маркетплейсов.
 * @prop {React.ReactNode} SectionComponent Внешний компонент для отрисовки блока.
 */
export interface IPlayerProps {
    script: IScriptRs;
    scriptName: string;
    onResult: (playerContext: IPlayerContext, resultType?: EResultType) => void;
    outsideContext?: IPlayerContext;
    customWidgets?: IWidgetDefinition<any>[];
    onPhaseChange?: (phase: string) => void;
    onError?: (errors: IScriptBlockError[]) => void;
    className?: string;
    onlyShow?: boolean;
    onlyShowNextLabel?: string;
    onChangeHistory?: (history: IHistoryContext[]) => void;
    marketplaces?: IMarketPlace[];
    SectionComponent?: JSXElementConstructor<ISectionComponentProps>;
}
/**
 * Интерфейс интерпретатора.
 */
export interface IInterpreter extends Interpreter {
}
/**
 * Интерфейс для виджетов экрана с переходом.
 *
 * @prop {Function} onSwitchToBlock Функция вызываемая при переходе на другой блок.
 * @prop {Function} onError Вызывается при ошибке в виджете.
 * @prop {IPlayerContext} playerContext Контекст скрипта.
 * @prop {IInterpreter} interpreter Интерпретатор выражений.
 */
export interface IWidgetWithScreenChange {
    onSwitchToBlock: (blockId: string, saveContext?: boolean) => void;
    onError: (errors: IErrorBase[]) => void;
    playerContext: IPlayerContext;
    interpreter: IInterpreter;
}
/**
 * Виджеты с переходами между экранами.
 */
export declare type IWidgetWithRouteProps = IButtonRouteProps | IScreenMenuProps;
/**
 * Модель для кнопки экрана, задающей переход на другой блок скрипта.
 *
 * @prop {string} label Метка кнопки.
 * @prop {IExpressionWithOriginal} disabledExpression Выражение для расчёта доступности перехода. true - переход недоступен.
 * @prop {string} shouldSave Сохранять ли при переходе контекст текущего экрана.
 * @prop {string} nextId Ссылка на связанный с переходом блок.
 * @prop {boolean} shouldValidate Флаг отвечающий за необходимость валидации того или иного поля формы
 * @prop {function} onValidateClick Функция запускающая валидацию того или иного поля формы
 */
export interface IButtonRouteProps extends IWidgetWithScreenChange {
    label: string;
    disabledExpression: IExpressionWithOriginal;
    shouldSave: boolean;
    nextId: string;
    shouldValidate?: boolean;
    onValidateClick?: (event: SyntheticEvent | null, isNeedCustomNextAction: boolean) => boolean;
}
/**
 * Модель для пункта меню экрана, задающего переход на другой блок скрипта.
 *
 * @prop {string} label Метка пункта меню.
 * @prop {IExpressionWithOriginal} disabledExpression Выражение для расчёта доступности перехода. true - переход недоступен.
 * @prop {string} infoVariable Переменная с текстом для дополнительной информации.
 * @prop {string} nextId Ссылка на связанный с переходом блок.
 * @props {boolean} shouldValidateItem Валидация полей формы перед переходом на следующий блок
 */
export interface IScreenMenuItem {
    label: string;
    disabledExpression: IExpressionWithOriginal;
    infoVariable: string;
    nextId: string;
    shouldValidateItem: boolean;
}
/**
 * Модель для виджета меню экрана связанного с переходами на другие блоки скрипта.
 *
 * @prop {boolean} hasSearch Флаг наличия поиска.
 * @prop {IScreenMenuItem[]} options Пункты меню.
 * @props {function} onValidateClick функция вызывающая валидацию формы или конкретного поля
 */
export interface IScreenMenuProps extends IWidgetWithScreenChange {
    hasSearch: boolean;
    options: IScreenMenuItem[];
    onValidateClick?: (event: SyntheticEvent | null, isNeedCustomNextAction: boolean) => boolean;
}
/**
 * Формульное выражение с оригиналом.
 *
 * @prop {string} original Исходное выражение.
 */
export interface IExpressionWithOriginal extends Partial<IWithExpression> {
    original: string;
}
export interface ITokenCustom extends Omit<IToken, 'a' | 'v'> {
    a?: ITokenCustom[];
    v?: string;
}
/**
 * Интерфейс для моделей содержащих выражение.
 *
 * @prop {ITokenCustom} expression Токен выражения.
 */
export interface IWithExpression {
    expression: ITokenCustom;
}
/**
 * Информация о версии BH.
 *
 * @prop {string} version Номер версии BH.
 * @prop {string} distribVersion Номер версии дистрибутива.
 * @prop {string} [subsystem] Код подсистема.
 * @prop {string} [channel] Канал.
 * @prop {string} [deploymentUnit] Название ear.
 * @prop {string} [platform] Версия платформы.
 * @prop {string} [sessionId] Идентификатор сессии.
 * @prop {string} [serverIp] IP адрес сервера приложений.
 * @prop {'PRIMARY' | 'STANDIN' | 'BLACKOUT'} [standinMode] Текущий режим stand-in.
 */
export interface IVersionInfo {
    version: string;
    distribVersion: string;
    subsystem?: string;
    channel?: string;
    deploymentUnit?: string;
    platform?: string;
    sessionId?: string;
    serverIp?: string;
    standinMode?: 'PRIMARY' | 'STANDIN' | 'BLACKOUT';
}
/**
 * Валидатор для виджета экрана.
 *
 * @prop {string} message Сообщение для вывода при нарушении выражения валидации.
 */
export interface IValidator extends IExpressionWithOriginal {
    message: string;
}
/**
 * Информация по нарушенной валидации.
 *
 * @prop {string} message Сообщение об ошибке.
 * @prop {IWidget | string} source Источник ошибки. Виджет или специальная строка-идентификатор.
 */
export interface IValidationError {
    message: string;
    source: IWidget<any> | string;
}
export declare type PlayerActionsTypes = typeof PlayerActions extends {
    [key: string]: (...args: any[]) => infer U;
} ? U : never;
export declare type AppThunk<ReturnType = void> = ThunkAction<ReturnType, PlayerStoreType, unknown, PlayerActionsTypes>;
export declare type GetPlayerActionType<T extends keyof typeof PlayerActions> = ReturnType<typeof PlayerActions[T]>;
/** Интерфейс входных и выходных параметров скрипта */
export interface IContextParam {
    /** Код переменной в контексте */
    name: string;
    /** Человекочитаемое название */
    title?: string;
    /** Тип переменной */
    type: TEPropRsType;
    /** Признак обязательности переменной в контексте */
    required: boolean;
    /** Значение по умолчанию для необязательных параметров */
    default?: string;
}
/** Интерфейс секции */
export interface ISection {
    /** Входящие в блок rowNumber */
    rowNumbers: number[];
    /** Имя секции */
    name: ISectionName;
    /** Можно ли развернуть/свернуть блок */
    isCollapsible: boolean;
    /** Состояние блока */
    isExpanded: ISectionExpandLink | ISectionExpandBool;
}
/** Имя секции */
interface ISectionName {
    type: TESection;
    value: string;
}
interface ISectionExpandLink {
    type: TLowercase<EPropRsType.LINK>;
    value: string;
}
interface ISectionExpandBool {
    type: TLowercase<EPropRsType.BOOLEAN>;
    value: boolean;
}
export interface ISectionComponentProps {
    /** Заголовок блока */
    title: string;
    /** Содержимое блока */
    children: React.ReactElement;
    /** Является ли блок сворачиваемым */
    isCollapsible: boolean;
    /** Состояние блока по умолчанию (схлопнут/расхлопнут) */
    defaultExpanded: boolean;
    /** Есть ли ошибка внутри блока */
    hasError: boolean;
}
export {};
