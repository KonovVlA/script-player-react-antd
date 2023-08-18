/// <reference types="react" />
import { IErrorBase, IScreenMenuItem, IScreenMenuProps, WidgetClass } from "../../Models";
/**
 * Свойства компонента.
 */
export interface IProps extends IScreenMenuProps {
}
/**
 * Состояние компонента.
 *
 * @prop {string} [query] Запрос.
 */
export interface IState {
    query?: string;
}
export declare const NO_RESULT = "\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E";
/**
 * Список с переходами (меню).
 */
export declare class MenuRoute extends WidgetClass<IProps, IState> {
    static widgetName: string;
    props: IProps;
    state: IState;
    static validator(props: IProps): IErrorBase[];
    shouldComponentUpdate(nextProps: IProps, nextState: IState): boolean;
    handleQueryChange: (query: string) => void;
    handleClickOption: (option: IScreenMenuItem, disabled: boolean, index: number) => () => void;
    /**
     * Вывод опции на экран.
     */
    renderOption: (option: IScreenMenuItem, additionalInfo: string, index: number) => JSX.Element;
    render(): JSX.Element;
}
