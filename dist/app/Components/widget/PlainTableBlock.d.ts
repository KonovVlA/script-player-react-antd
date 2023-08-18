/// <reference types="react" />
import { EHorizontalAlign, EVerticalAlign, EColumnStyle } from "../../Enums";
import { IWidgetBaseProps, WidgetClassStateless, IErrorBase } from "../../Models";
/**
 * Параметры колонок.
 *
 * @prop {string} [label] Заголовок колонки.
 * @prop {string} [width] Ширина колонок с префиксом "px" или "%".
 * @prop {EHorizontalAlign} [hAlign] Выравнивание по горизонтали.
 * @prop {EVerticalAlign} [vAlign] Выравнивание по вертикали.
 * @prop {EColumnStyle} [columnStyle] Стиль оформления колонки.
 */
export interface ITableHeader {
    label?: string;
    width?: string;
    hAlign?: EHorizontalAlign;
    vAlign?: EVerticalAlign;
    columnStyle?: EColumnStyle;
}
/**
 * Свойства табличного блока.
 *
 * @prop {string} [caption] Заголовок таблицы.
 * @prop {ITableHeader[]} headers Параметры колонок.
 * @prop {any[][]} rows Данные для отображения в таблице.
 */
export interface IProps extends IWidgetBaseProps<void> {
    caption?: string;
    headers: ITableHeader[];
    rows: any[][];
}
/**
 * Табличный блок.
 */
export declare class PlainTableBlock extends WidgetClassStateless<IProps> {
    static widgetName: string;
    static validator(props: IProps): IErrorBase[];
    shouldComponentUpdate(nextProps: IProps): boolean;
    render(): JSX.Element;
}
