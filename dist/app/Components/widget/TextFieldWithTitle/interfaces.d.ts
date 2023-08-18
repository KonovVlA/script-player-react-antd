import { EFormLayout } from "../../../Enums";
import { IWidgetBaseProps } from "../../../Models";
/**
 * Свойства компонента.
 *
 * @prop {string} label Подпись над полем ввода.
 * @prop {string} text Содержимое текстового поля.
 * @prop {boolean} copyable Отображать ли кнопку копировать
 * @prop {EFormLayout} layout Layout для виджета
 */
export interface IProps extends IWidgetBaseProps<void> {
    label?: string;
    text?: string;
    copyable?: boolean;
    layout?: EFormLayout;
}
