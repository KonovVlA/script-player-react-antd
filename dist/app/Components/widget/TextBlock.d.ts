/// <reference types="react" />
import { IWidgetBaseProps, WidgetClassStateless, IErrorBase } from '../../Models';
/**
 * Свойства текстового блока.
 *
 * @prop {string | number} text Текст, выводимый пользователю.
 */
export interface IProps extends IWidgetBaseProps<void> {
    text: string | number;
}
/**
 * Текстовый блок.
 */
export declare class TextBlock extends WidgetClassStateless<IProps> {
    static widgetName: string;
    static validator(props: IProps): IErrorBase[];
    shouldComponentUpdate(nextProps: IProps): boolean;
    render(): JSX.Element;
}
