/// <reference types="react" />
import { EFormLayout } from "../../Enums";
import { IOption, IWidgetBaseProps, WidgetClassStateless, IErrorBase } from "../../Models";
/**
 * Свойства выпадающего списка.
 *
 * @prop {string} [label] Подпись над полем ввода.
 * @prop {string} [caption] Заголовок выпадающего списка.
 * @prop {boolean} [isSelectedDefault] Выбрано значение по дефолту.
 * @prop {T} options Список опций, может быть так же ContextPath, в reducers из-за этого проблемы,
 *                   так как там подставляется значение по умолчанию.
 *                   FIXME: ContextPath используется для типизации reducer
 * @prop {boolean} [readOnly] Флаг отвечающий за блокировку виджета
 * @prop {EFormLayout} layout Layout для виджета.
 */
export interface IProps<T> extends IWidgetBaseProps<string> {
    label?: string;
    caption?: string;
    isSelectedDefault?: boolean;
    options: T;
    readOnly?: boolean;
    layout?: EFormLayout;
}
export declare type TOptions = IOption<string>[];
/**
 * Выпадающий список.
 */
export declare class SelectBlock extends WidgetClassStateless<IProps<TOptions>> {
    static widgetName: string;
    static validator(props: IProps<TOptions>): IErrorBase[];
    shouldComponentUpdate(nextProps: IProps<TOptions>): boolean;
    /**
     * Выбор нового значения из выпадающего списка.
     *
     * @param {number} index Индекс выбранного пункта списка.
     * @param {string} value Значение выбранного пункта списка.
     */
    onChange: (index: number, value: string) => void;
    render(): JSX.Element;
}
