import { IExampleAction, IExampleStore } from "../ExampleModel";
export declare const initialExampleStore: () => IExampleStore;
export default function exampleReducer(store: IExampleStore, action: IExampleAction<any>): IExampleStore;
