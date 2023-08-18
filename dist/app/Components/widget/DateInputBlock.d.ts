/// <reference types="react" />
import { Moment } from 'moment';
import { EFormLayout } from "../../Enums";
import { IWidgetBaseProps, WidgetClassStateless, IErrorBase } from "../../Models";
/**
 * Свойства поля выбора даты.
 *
 * @prop {string} label Подпись над полем ввода.
 * @prop {string} [dateType] Тип поля.
 * @prop {Date} [min] Минимальное значение.
 * @prop {Date} [max] Максимальное значение.
 * @prop {boolean} [readOnly] Флаг отвечающий за блокировку виджета
 * @prop {string} format Формат даты.
 * @prop {EFormLayout} layout Layout для виджета.
 */
export interface IProps extends IWidgetBaseProps<Date> {
    label?: string;
    dateType?: string;
    min?: Date;
    max?: Date;
    readOnly?: boolean;
    format?: string;
    layout?: EFormLayout;
}
/**
 * Типы полей даты.
 *
 * DATE_PICKER - Выбор дня в году (по умолчанию).
 * WEEK_PICKER - Выбор недели.
 * MONTH_INPUT - Выбор месяца.
 * QUARTER_PICKER - Выбор квартала.
 * YEAR_PICKER - Выбор года.
 * DATE_TIME_PICKER - Выбор дня и времени.
 * TIME_PICKER - Выбор времени.
 */
export declare enum EDateInputTypes {
    DATE_PICKER = "DATE_PICKER",
    WEEK_PICKER = "WEEK_PICKER",
    MONTH_INPUT = "MONTH_INPUT",
    QUARTER_PICKER = "QUARTER_PICKER",
    YEAR_PICKER = "YEAR_PICKER",
    DATE_TIME_PICKER = "DATE_TIME_PICKER",
    TIME_PICKER = "TIME_PICKER"
}
/**
 * Поле выбора даты.
 */
export declare class DateInputBlock extends WidgetClassStateless<IProps> {
    static widgetName: string;
    static validator(props: IProps): IErrorBase[];
    shouldComponentUpdate(nextProps: IProps): boolean;
    /**
     * Трансформация типа даты из строки в Enum предназначенный для DateInput.
     */
    transformType: (dateType: string) => 'time' | 'date' | 'week' | 'month' | 'quarter' | 'year';
    getDisabledDate: (d: Moment) => boolean;
    render(): JSX.Element;
}
