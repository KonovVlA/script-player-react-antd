/// <reference types="react" />
import { EFormLayout } from "../../Enums";
import { IWidgetBaseProps, WidgetClassStateless, IErrorBase } from "../../Models";
/**
 * Свойства тумблера.
 *
 * @prop {string} [label] Подпись для поля ввода.
 * @prop {number} [disabled] Возможно ли редактирование.
 * @prop {Function} [onFocus] Функция вызываемая при фокусе компонента.
 * @prop {boolean} [readOnly] Флаг отвечающий за блокировку виджета
 * @prop {EFormLayout} layout Layout для виджета.
 */
export interface IProps extends IWidgetBaseProps<boolean> {
    label?: string;
    disabled?: boolean;
    onFocus?: () => void;
    readOnly?: boolean;
    layout?: EFormLayout;
}
/**
 * Обёртка над Switch из ufs-ui.
 */
export declare class SwitchBlock extends WidgetClassStateless<IProps> {
    static widgetName: string;
    static validator(props: IProps): IErrorBase[];
    componentDidMount(): void;
    shouldComponentUpdate(nextProps: IProps): boolean;
    render(): JSX.Element;
}
