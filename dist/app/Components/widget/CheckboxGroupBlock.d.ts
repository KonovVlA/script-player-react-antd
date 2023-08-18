/// <reference types="react" />
import { EFormLayout } from "../../Enums";
import { IOption, IWidgetBaseProps, WidgetClass, IErrorBase } from "../../Models";
/**
 * Свойства группы Checkbox-ов.
 *
 * @prop {string} [label] Подпись над полем ввода.
 * @prop {IOption[]} options Список вариантов выбора.
 * @prop {Function} [onFocus] Функция вызываемая при фокусе компонента.
 * @prop {boolean} [readOnly] Флаг отвечающий за блокировку виджета
 * @prop {EFormLayout} layout Layout для виджета.
 */
export interface IProps extends IWidgetBaseProps<string[]> {
    label?: string;
    options: IOption<string>[];
    onFocus?: () => void;
    readOnly?: boolean;
    layout?: EFormLayout;
}
/**
 * Группа Checkbox-ов.
 */
export declare class CheckboxGroupBlock extends WidgetClass<IProps, {}> {
    static widgetName: string;
    props: IProps;
    /**
     * Валидация входящих параметров.
     *
     * @prop {IProps} props Параметры виджета для проверки.
     */
    static validator(props: IProps): IErrorBase[];
    shouldComponentUpdate(nextProps: IProps): boolean;
    /**
     * Переключение чекбокса при клике.
     */
    handleChange: (e: string[]) => void;
    render(): JSX.Element;
}
