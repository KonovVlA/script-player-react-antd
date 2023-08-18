import { IPlayerContext } from '../Models';
/**
 * Класс для значений переменных.
 * Используется для реализации типа "link" при задании свойств виджета экрана.
 */
export declare class ContextPath {
    isContextPath: boolean;
    contextPath: string;
    constructor(contextPath: string);
    /**
     * Контекст для поиска переменной по пути contextName.
     *
     * @param {IPlayerContext} context Контекст с переменными.
     */
    getValue(context: IPlayerContext): any;
}
