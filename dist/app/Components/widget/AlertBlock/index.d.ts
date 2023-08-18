/// <reference types="react" />
import { IErrorBase, WidgetClassStateless } from "../../../Models";
import { IProps } from './interfaces';
/** Компонент Алерт */
export declare class AlertBlock extends WidgetClassStateless<IProps> {
    static widgetName: string;
    static validator(props: IProps): IErrorBase[];
    shouldComponentUpdate(nextProps: IProps): boolean;
    render(): JSX.Element;
}
