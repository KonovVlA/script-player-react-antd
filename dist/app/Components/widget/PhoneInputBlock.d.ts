/// <reference types="react" />
import { EFormLayout } from "../../Enums";
import { IWidgetBaseProps, WidgetClassStateless, IErrorBase } from "../../Models";
/**
 * Свойства поля ввода для номера телефона.
 *
 * @prop {string} [label] Подпись над полем ввода.
 * @prop {boolean} [readOnly] Флаг отвечающий за блокировку виджета
 * @prop {EFormLayout} layout Layout для виджета.
 */
export interface IProps extends IWidgetBaseProps<string> {
    label?: string;
    readOnly?: boolean;
    layout?: EFormLayout;
}
/**
 * Поле ввода для номера телефона.
 */
export declare class PhoneInputBlock extends WidgetClassStateless<IProps> {
    static widgetName: string;
    static validator(props: IProps): IErrorBase[];
    shouldComponentUpdate(nextProps: IProps): boolean;
    render(): JSX.Element;
}
