/// <reference types="react" />
import { RadioChangeEvent } from 'antd/es';
import { EFormLayout } from "../../Enums";
import { IOption, IWidgetBaseProps, WidgetClass, IErrorBase } from "../../Models";
/**
 * Свойства компонента.
 *
 * @prop {string} [label] Подпись над полем ввода.
 * @prop {IOption[]} options Список вариантов выбора.
 * @prop {boolean} [readOnly] Флаг отвечающий за блокировку виджета
 * @prop {EFormLayout} layout Layout для виджета.
 */
export interface IProps extends IWidgetBaseProps<string> {
    label?: string;
    options: IOption<string>[];
    readOnly?: boolean;
    layout?: EFormLayout;
}
/**
 * Состояние компонента.
 *
 * @prop {string} value Текущий выбранный пункт.
 */
export interface IState {
    value?: string;
}
/**
 * Обёртка над RadioGroup.
 */
export declare class RadioGroupBlock extends WidgetClass<IProps, IState> {
    static widgetName: string;
    state: IState;
    static validator(props: IProps): IErrorBase[];
    componentDidUpdate(prevProps: IProps): void;
    shouldComponentUpdate(nextProps: IProps, nextState: IState): boolean;
    /**
     * Переключение радиобаттона при клике.
     *
     * @param {RadioChangeEvent} event Событие изменения радиобаттона.
     */
    onChange: (event: RadioChangeEvent) => void;
    render(): JSX.Element;
}
