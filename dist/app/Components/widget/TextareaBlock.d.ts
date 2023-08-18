/// <reference types="react" />
import { EFormLayout } from "../../Enums";
import { IWidgetBaseProps, WidgetClassStateless, IErrorBase } from "../../Models";
/**
 * Свойства компонента.
 *
 * @prop {string} label Подпись над полем ввода.
 * @prop {string} placeholder Текст, выводимый в поле ввода, если значение не задано
 * @prop {number} maxLength Максимальное количество допустимых к вводу символов.
 * @prop {boolean} [readOnly] Флаг отвечающий за блокировку виджета
 * @prop {EFormLayout} layout Layout для виджета.
 */
export interface IProps extends IWidgetBaseProps<string> {
    label?: string;
    placeholder?: string;
    maxLength?: number;
    readOnly?: boolean;
    layout?: EFormLayout;
}
/**
 * Многострочное поле ввода.
 */
export declare class TextareaBlock extends WidgetClassStateless<IProps> {
    static widgetName: string;
    static validator(props: IProps): IErrorBase[];
    shouldComponentUpdate(nextProps: IProps): boolean;
    render(): JSX.Element;
}
