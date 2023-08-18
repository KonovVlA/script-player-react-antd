import { IWidget } from "../../Models";
import React from 'react';
/**
 * Свойства компонента WidgetWrapper
 * @props {IWidget} widget виджет
 * @props {React.ReactElement} children компонент
 */
export interface IWidgetWrapper {
    widget: IWidget<any>;
    children: React.ReactElement;
}
