/// <reference types="react" />
import { RadioChangeEvent } from 'antd/lib/radio/interface';
import { EFormLayout } from "../../Enums";
import { IErrorBase, IOption, IWidgetBaseProps, WidgetClassStateless } from "../../Models";
/**
 * Свойства компонента.
 *
 * @prop {string} [label] Подпись над полем ввода.
 * @prop {IOption[]} options Список вариантов выбора.
 * @prop {Function} [onFocus] Функция вызываемая при фокусе компонента.
 * @prop {EFormLayout} layout Layout для виджета.
 * @prop {boolean} [readOnly] Флаг отвечающий за блокировку виджета
 */
export interface IProps extends IWidgetBaseProps<string> {
    label?: string;
    options: IOption<string>[];
    onFocus?: () => void;
    layout?: EFormLayout;
    readOnly?: boolean;
}
/**
 * Выбор с помощью кнопочных элементов (обёртка над HorizontalSelector).
 */
export declare class ButtonSelectorBlock extends WidgetClassStateless<IProps> {
    static widgetName: string;
    props: IProps;
    static validator(props: IProps): IErrorBase[];
    shouldComponentUpdate(nextProps: IProps): boolean;
    /**
     * Переключение значения.
     *
     * @param {RadioChangeEvent} e событие изменения.
     */
    onChange: (e: RadioChangeEvent) => void;
    render(): JSX.Element;
}
