import { EDividerViewType } from "../../../Enums";
import { IWidgetBaseProps } from "../../../Models";
/**
 * Свойства компонента.
 *
 * @prop {EDividerViewType} [viewType] Вид разделителя (сплошной/пунктир).
 * @prop {string} [text] Текст в разделителе.
 * @prop {boolean} [plain] Отображать ли текст разделителя в виде plain text.
 */
export interface IProps extends IWidgetBaseProps<void> {
    viewType?: EDividerViewType;
    text?: string;
    plain?: boolean;
}
