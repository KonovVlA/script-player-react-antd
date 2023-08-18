/// <reference types="react" />
import { IWidgetBaseProps, IWidgetDefinition } from "../../app/Models";
interface IValue {
    id: string;
    amount: string;
    account: string;
}
interface IProps extends IWidgetBaseProps<IValue[] | null> {
    label?: string;
    cardAddress: string;
}
export declare const IncidentsWidget: ({ value, onChange, label, hasError, errorMessage, isRequired, onlyShow, }: IProps) => JSX.Element;
export declare const getIncidentsWidget: () => IWidgetDefinition<any>;
export {};
