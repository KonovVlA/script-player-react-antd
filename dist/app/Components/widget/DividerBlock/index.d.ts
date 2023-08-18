/// <reference types="react" />
import { IErrorBase, WidgetClassStateless } from "../../../Models";
import { IProps } from './interfaces';
/**
 * Блок разделителя.
 */
export declare class DividerBlock extends WidgetClassStateless<IProps> {
    static widgetName: string;
    static validator(props: IProps): IErrorBase[];
    shouldComponentUpdate(nextProps: IProps): boolean;
    render(): JSX.Element;
}
