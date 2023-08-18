/// <reference types="react" />
import { IWidgetBaseProps, WidgetClassStateless } from "../../Models";
/**
 * Свойства компонента.
 *
 * @prop {string} [label] Подпись над полем ввода.
 * @prop {string} [placeholder] Текст, выводимый в поле ввода, если значение не задано
 */
export interface IProps extends IWidgetBaseProps<string> {
    label?: string;
    placeholder?: string;
}
/**
 * Поле ввода электронной почты.
 */
export declare class EmailInputBlock extends WidgetClassStateless<IProps> {
    static widgetName: string;
    render(): JSX.Element;
}
