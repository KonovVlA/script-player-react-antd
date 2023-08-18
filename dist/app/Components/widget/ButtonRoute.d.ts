/// <reference types="react" />
import { IButtonRouteProps, WidgetClass, IErrorBase } from "../../Models";
/**
 * Свойства компонента.
 */
export interface IProps extends IButtonRouteProps {
}
/**
 * Кнопка с переходом.
 */
export declare class ButtonRoute extends WidgetClass<IProps, void> {
    static widgetName: string;
    props: IProps;
    static validator(props: IProps): IErrorBase[];
    shouldComponentUpdate(nextProps: IProps): boolean;
    handleClick: () => void;
    render(): JSX.Element;
}
