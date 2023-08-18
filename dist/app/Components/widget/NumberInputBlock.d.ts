/// <reference types="react" />
import { EFormLayout } from "../../Enums";
import { IErrorBase, IWidgetBaseProps, WidgetClassStateless } from "../../Models";
/**
 * Свойства поля ввода числового значения.
 *
 * @prop {string} [label] Подпись над полем ввода.
 * @prop {string} [currency] Валюта ввода.
 * @prop {number} [fractionalDigitsCount] Количество знаков после запятой.
 * @prop {number} [disabled] Возможно ли редактирование.
 * @prop {boolean} [readOnly] Флаг отвечающий за блокировку виджета
 * @prop {EFormLayout} layout Layout для виджета.
 */
export interface IProps extends IWidgetBaseProps<number> {
    label?: string;
    currency?: string;
    fractionalDigitsCount?: number;
    disabled?: boolean;
    readOnly?: boolean;
    layout?: EFormLayout;
}
/**
 * Поле ввода числового значения.
 */
export declare class NumberInputBlock extends WidgetClassStateless<IProps> {
    static widgetName: string;
    static validator(props: IProps): IErrorBase[];
    shouldComponentUpdate(nextProps: IProps): boolean;
    handleChange: (value: string | number) => void;
    render(): JSX.Element;
}
