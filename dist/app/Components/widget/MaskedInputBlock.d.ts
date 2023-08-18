/// <reference types="react" />
import { EFormLayout } from "../../Enums";
import { IWidgetBaseProps, WidgetClassStateless, IErrorBase } from "../../Models";
/**
 * Свойства поля ввода по маске.
 *
 * @prop {string} [label] Подпись над полем ввода.
 * @prop {string} mask Маска для ввода данных.
 * @prop {boolean} [readOnly] Флаг отвечающий за блокировку виджета
 * @prop {EFormLayout} layout Layout для виджета.
 */
export interface IProps extends IWidgetBaseProps<string> {
    label?: string;
    mask: string;
    readOnly?: boolean;
    layout?: EFormLayout;
}
/**
 * Поле ввода по маске.
 */
export declare class MaskedInputBlock extends WidgetClassStateless<IProps> {
    static widgetName: string;
    static validator(props: IProps): IErrorBase[];
    shouldComponentUpdate(nextProps: IProps): boolean;
    render(): JSX.Element;
}
