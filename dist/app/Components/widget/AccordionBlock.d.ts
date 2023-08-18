/// <reference types="react" />
import { IOption, WidgetClass, IWidgetBaseProps, IErrorBase } from "../../Models";
/**
 * Свойства мини-аккордеона.
 *
 * @prop {IOption} options Список аккордеонов.
 */
export interface IProps extends IWidgetBaseProps<void> {
    options: IOption<string>[];
}
/**
 * Состояние мини-аккордеона.
 *
 * @prop {number} opened Номер выбранного аккордеона.
 */
export interface IState {
    opened: number;
}
/**
 * Мини-аккордеон.
 */
export declare class AccordionBlock extends WidgetClass<IProps, IState> {
    static widgetName: string;
    state: IState;
    static validator(props: IProps): IErrorBase[];
    shouldComponentUpdate(nextProps: IProps, nextState: IState): boolean;
    render(): JSX.Element;
}
