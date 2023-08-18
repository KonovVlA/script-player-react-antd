/// <reference types="react" />
import { IWidgetBaseProps, WidgetClassStateless, IErrorBase } from "../../Models";
/**
 * Свойства текстового блока.
 *
 * @prop {string} markdown Форматированный текст, выводимый пользователю.
 */
export interface IProps extends IWidgetBaseProps<void> {
    markdown: string;
}
/**
 * Форматированный текстовый блок.
 */
export declare class MarkdownBlock extends WidgetClassStateless<IProps> {
    static widgetName: string;
    static validator(props: IProps): IErrorBase[];
    shouldComponentUpdate(nextProps: IProps): boolean;
    render(): JSX.Element;
}
