/// <reference types="react" />
import { IErrorBase, WidgetClassStateless } from "../../../Models";
import { IProps } from './interfaces';
/**
 * Текстовое поле с заголовком.
 */
export declare class TextFieldWithTitle extends WidgetClassStateless<IProps> {
    static widgetName: string;
    static validator(props: IProps): IErrorBase[];
    shouldComponentUpdate(nextProps: IProps): boolean;
    render(): JSX.Element;
}
