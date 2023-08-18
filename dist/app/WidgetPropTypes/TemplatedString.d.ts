import { IPlayerContext } from '../Models';
/**
 * Класс для шаблонных строк.
 * Используется для реализации типа "template" при задании свойств виджета экрана.
 */
export declare class TemplatedString {
    isTemplatedString: boolean;
    template: string;
    contextPaths: string[];
    /**
     * Получаем путь до значений в контексте для отображения шаблонной строки.
     *
     * @param {string} template Шаблон.
     */
    getContextPaths(template: string): string[];
    constructor(template: string);
    forReplace(char: string, token: string): RegExp;
    /**
     * Получение значения из заданной шаблонной строки.
     *
     * @param {IPlayerContext} context Контекст с переменными для шаблона.
     */
    getValue(context: IPlayerContext): string;
}
