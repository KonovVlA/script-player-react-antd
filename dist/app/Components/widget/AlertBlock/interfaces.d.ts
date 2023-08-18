import { IOption, IWidgetBaseProps } from "../../../Models";
import { EAlertType, ELinkDirection } from "./\u0441onstants";
/**
 * Свойства компонента AlertBlock
 *
 * @prop {IOption<string>[]} links список ссылок
 * @prop {string} label Заголовок
 * @prop {string} text Описание
 * @prop {ELinkDirection} Расположение ссылок
 * @prop {EAlertType} Тип алерта
 */
export interface IProps extends IWidgetBaseProps<string> {
    links?: IOption<string>[];
    label?: string;
    text?: string;
    linkDirection?: ELinkDirection;
    alertType?: EAlertType;
}
