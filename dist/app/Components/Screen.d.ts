import { Component, SyntheticEvent, JSXElementConstructor } from 'react';
import { IBackendError, IBlockScreen, IButtonRouteProps, ICustomWidget, ICustomWidgetData, IError, IInterpreter, IPlayerContext, IScreenMenuProps, ISectionComponentProps, IValidationError, IVersionInfo, IWidget, IWidgetClass, IWidgetDefinition, IWidgetProps } from "../Models";
import '../../styles/index.less';
import { EDefaultWidget } from '../Enums';
/**
 * @prop {IBlockScreen} block Блок экрана.
 * @prop {IPlayerContext} playerContext Контекст плеера.
 * @prop {boolean} hasHistory Признак наличия истории.
 * @prop {Function} onChangeWidget Динамический пересчёт экрана.
 * @prop {Function} onBlurWidget Обработчик потери фокуса с виджета.
 * @prop {IWidgetDefinition[]} [customWidgets] Пользовательские компоненты.
 * @prop {Function} onClickPrev Переход на предыдущий экран.
 * @prop {Function} onClickNext Переход на следующий экран.
 * @prop {Record<string, ICustomWidgetData>} [customWidgetMap] Карта UI-компонентов из маркетплейсов.
 * @prop {Function} onSwitchToBlock Переход к блоку скрипта.
 * @prop {Function} onValidatedSwitchToBlock Переход к блоку скрипта с валидацией экранной формы.
 * @prop {Function} onBlockErrors Ошибки при работе блока.
 * @prop {IInterpreter} interpreter Интерпретатор выражений.
 * @prop {IValidationError[]} [validationErrors] Ошибки валидации.
 * @prop {IVersionInfo} [versionInfo] Информация по версии.
 * @prop {string} scriptName название скрипта
 * @prop {React.ReactNode} SectionComponent Внешний компонент для отрисовки блока.
 */
export interface IProps {
    block: IBlockScreen;
    playerContext: IPlayerContext;
    hasHistory: boolean;
    onChangeWidget: (contextName: string, value: any, calculatingBlockId: string) => void;
    onBlurWidget: (widget: IWidget<any>) => void;
    customWidgets?: IWidgetDefinition<any>[];
    onClickPrev: () => void;
    onClickNext: (event: SyntheticEvent | null, isNeedCustomNextAction?: boolean) => boolean;
    customWidgetMap?: Record<string, ICustomWidgetData>;
    onSwitchToBlock: (blockId: string, saveContext?: boolean) => void;
    onValidatedSwitchToBlock: (widget: IWidget<IButtonRouteProps>) => (blockId: string, saveContext?: boolean) => void;
    onBlockErrors: (scriptBlockErrors: IError[]) => void;
    interpreter: IInterpreter;
    validationErrors?: IValidationError[];
    versionInfo?: IVersionInfo;
    onlyShow?: boolean;
    onlyShowNextLabel?: string;
    showCalculateError: (scriptCalculateError: IError) => void;
    scriptName: string;
    SectionComponent?: JSXElementConstructor<ISectionComponentProps>;
}
export declare class Screen extends Component<IProps, {}> {
    static displayName: string;
    screenRef: HTMLDivElement;
    getScreenRef: (node: HTMLDivElement) => HTMLDivElement;
    shouldComponentUpdate(nextProps: IProps): boolean;
    componentDidUpdate(prevProps: IProps): void;
    isScrollNeeded: () => boolean;
    scrollToTop: () => void;
    /**
     * Фабрика по производству компонентов.
     *
     * @param {EDefaultWidget | string} widgetName Название компонента.
     */
    getKnownWidgetClass: (widgetName: EDefaultWidget | string) => IWidgetClass<any>;
    /**
     * Парсинг ссылок на контекстные переменные в текстовых свойствах виджета.
     *
     * @param {IWidgetProps} props Исходные свойства виджета.
     */
    parseVariablesInProps: (props: IWidgetProps) => IWidgetProps;
    /**
     * Фабрика по производству пользовательских компонентов.
     *
     * @param {EDefaultWidget | string} widgetName Название компонента.
     */
    getCustomWidgetClass: (widgetName: EDefaultWidget | string) => IWidgetDefinition<any>;
    /**
     * Получаем для отрисовки на экране компонент и параметры для него.
     *
     * @param {IWidget<IWidgetProps>} widget Компонент для отображения.
     */
    getWidgetAndProps: (widget: ICustomWidget<IWidgetProps>) => {
        WidgetComponent: any;
        props: IWidgetProps;
        additionProps: IWidgetProps;
    };
    /**
     * Обработка изменения значения компонента.
     *
     * @param {IWidget} widget компонент.
     */
    handleChangeWidget: (widget: IWidget<any>) => (value: any) => void;
    /**
     * Обработка потери фокуса с виджета.
     *
     * @param {IWidget} widget Компонент.
     */
    handleBlurWidget: (widget: IWidget<any>) => () => void;
    /**
     * Отображение стандартных кнопок Назад/Далее.
     */
    renderDefaultButtons: () => JSX.Element;
    /**
     * Отправка ошибки, которая произошла внутри виджета.
     *
     * @prop {number} row Индекс строки виджета.
     * @prop {number} column Индекс колонки виджета в строке.
     * @prop {string} contextName Переменная контекста, используемая в виджете
     */
    handleOnErrorWidget: (row: number, column: number, contextName: string) => (errors: IBackendError[]) => void;
    /**
     * Отправка ошибки, которая произошла внутри виджета.
     *
     * @prop {number} row Индекс строки виджета.
     * @prop {number} column Индекс колонки виджета в строке.
     * @prop {string} contextName Переменная контекста, используемая в виджете
     */
    handleErrorWidget: (errors: IError[]) => void;
    /**
     * Отправка ошибки, которая произошла при обработке spruce выражения.
     *
     * @prop {expression} spruce выражение.
     * @prop {widget} IWidget  Компонент в блоке экрана.
     */
    checkInterpreterExpression: (expression: any, widget: any) => any;
    renderGridView: () => JSX.Element;
    /**
     * Отображение экранных виджетов.
     */
    renderSectionView: (widgets: IWidget<IWidgetProps | IButtonRouteProps | IScreenMenuProps>[]) => JSX.Element;
    /**
     * Отображение панели с ошибками правил валидации от кнопок (Далее или  виджетов кнопок с переходами).
     */
    renderValidationFails: () => JSX.Element;
    render(): JSX.Element;
}
