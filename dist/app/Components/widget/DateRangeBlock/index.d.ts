/// <reference types="react" />
import { Moment } from 'moment';
import { IErrorBase, WidgetClassStateless } from "../../../Models";
import { IProps } from './interfaces';
/**
 * Компонент выбора диапазона дат.
 */
export declare class DateRangeBlock extends WidgetClassStateless<IProps> {
    static widgetName: string;
    static validator(props: IProps): IErrorBase[];
    getDisabledDate: (d: Moment) => boolean;
    /**
     * Колбэк на изменение выбора дат
     *
     * @param {[Moment, Moment]} date - дата из RangePicker
     */
    onChange: (date: [Moment, Moment]) => void;
    shouldComponentUpdate(nextProps: IProps): boolean;
    /**
     * Трансформация типа даты из строки в Enum предназначенный для RangePicker.
     */
    transformType: (rangeType: string) => 'month' | 'week' | 'year' | 'date';
    /**
     * Трансформация value из пропсов в формат для RangePicker
     */
    getValue: () => [Moment, Moment];
    render(): JSX.Element;
}
