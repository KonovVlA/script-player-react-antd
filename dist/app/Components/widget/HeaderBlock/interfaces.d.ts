import { EHeaderSize } from "../../../Enums";
import { IWidgetBaseProps } from "../../../Models";
/**
 * Свойства компонента.
 *
 * @prop {string} [text] Текст заголовка.
 * @prop {boolean} [copyable] Отображать ли кнопку копировать.
 * @prop {number} [size] Размер заголовка.
 */
export interface IProps extends IWidgetBaseProps<void> {
    text?: string;
    copyable?: boolean;
    size?: EHeaderSize;
}
