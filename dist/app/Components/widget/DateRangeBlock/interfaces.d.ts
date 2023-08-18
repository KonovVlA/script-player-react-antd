import { EFormLayout } from "../../../Enums";
import { IWidgetBaseProps } from "../../../Models";
import { EDateRangeInputTypes } from './constants';
/**
 * Свойства значения компонента выбора диапазона дат
 *
 * @prop {Date} min Начальное значение.
 * @prop {Date} end Конечное значение.
 */
export interface IDateRangeValue {
    start: Date;
    end: Date;
}
/**
 * Свойства компонента.
 *
 * @prop {string} [label] Подпись над полем ввода.
 * @prop {string} [placeholder] Текст, выводимый в поле ввода, если значение не задано
 * @prop {boolean} [readOnly] Флаг отвечающий за блокировку виджета
 * @prop {EDateRangeInputTypes} [rangeType] Тип выбора диапазона дат
 * @prop {Date} [min] Минимальное значение.
 * @prop {Date} [max] Максимальное значение.
 * @prop {string} [format] Формат даты.
 * @prop {EFormLayout} [layout] Layout для виджета.
 */
export interface IProps extends IWidgetBaseProps<IDateRangeValue> {
    label?: string;
    placeholder?: string;
    readOnly?: boolean;
    rangeType?: EDateRangeInputTypes;
    min?: Date;
    max?: Date;
    format?: string;
    layout?: EFormLayout;
}
