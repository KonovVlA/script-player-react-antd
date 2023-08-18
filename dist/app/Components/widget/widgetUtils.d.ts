import { EPropRsType } from "../../Enums";
import { IErrorBase, IOption } from "../../Models";
/**
 * Переводы типов данных
 */
export declare const typesTranslate: {
    object: string;
    array: string;
    string: string;
    number: string;
    boolean: string;
    template: string;
    link: string;
    date: string;
    expression: string;
    NaN: string;
    null: string;
    undefined: string;
};
/**
 * Получаем перевод типа данных.
 *
 * @param {string | EPropRsType} typeContext Тип данных.
 */
export declare function getTypeTranslate(typeContext: string | EPropRsType): any;
/**
 * Получить ошибку для контекстной переменной.
 *
 * @param {string} widgetName Название виджета.
 * @param {EPropRsType[]} typeContexts Тип данных.
 * @param {any} value Значение.
 * @param {number} valueIndex Индекс значения.
 */
export declare function getWidgetContextError(widgetName: string, typeContexts: EPropRsType[], value: any, valueIndex?: number): IErrorBase;
/**
 * Получить ошибку для примитивного свойства виджета.
 *
 * @param {string} widgetName Название виджета.
 * @param {keyof T} propName Название свойства виджета.
 * @param {EPropRsType[]} typeContexts Тип данных.
 * @param {Partial<T>} prop Значение свойства виджета.
 */
export declare function getWidgetPropertyError<T>(widgetName: string, propName: keyof T, typeContexts: EPropRsType[], prop: any): IErrorBase;
/**
 * Получить ошибку для option свойства виджета.
 *
 * @param {string} widgetName Название виджета.
 * @param {keyof T} propName Название свойства с массивом элементов.
 * @param {keyof S} optionName Название свойства в options.
 * @param {EPropRsType[]} typeContexts Тип данных.
 * @param {Partial<T>} option Значение параметра в options.
 * @param {number} optionIndex Индекс параметра в options.
 */
export declare function getWidgetOptionError<T, S>(widgetName: string, propName: keyof T): (optionName: keyof S, typeContexts: EPropRsType[], option: any, optionIndex: number) => IErrorBase;
/**
 * Проверка что параметр является числом или строкой.
 *
 * @param {any} value Значение для проверки.
 */
export declare function propIsStringOrNumber(value: any): boolean;
/**
 * Проверка значений для options, значения которого состоят из label и value.
 *
 * @param {IOption<string>[]} options Массив для проверки.
 * @param {string} widgetName Название виджета.
 */
export declare function validateDefaultOptions(options: IOption<string>[], widgetName: string): IErrorBase[];
/**
 * Получить массив ключей из enum.
 *
 * @param {any} enumValue enum, из которого получаем ключи.
 */
export declare function getEnumKeys(enumValue: any): string[];
/**
 * Получить ошибку, если значение не соответствует enum.
 *
 * @param {string[]} availableDateTypes Массив из enum ключей.
 * @param {string} value Значение для проверки.
 * @param {string} widgetName Название виджета.
 * @param {keyof T} propName Название свойства виджета.
 */
export declare function getEnumError<T>(availableDateTypes: string[], value: string, widgetName: string, propName: keyof T): {
    title: string;
    text: string;
};
/**
 * Получить ошибку, если значение не соответствует enum.
 *
 * @param {string} widgetName Название виджета.
 * @param {keyof T} propName Название свойства виджета.
 * @param {string[]} availableDateTypes Массив из enum ключей.
 * @param {string} value Значение для проверки.
 * @param {string} [optionName] Название параметра массива.
 * @param {number} [optionIndex] Индекс опции.
 */
export declare function getEnumErrorInOptions<T, S>(widgetName: string, propName: keyof T): (availableDateTypes: string[], value: string, optionName: keyof S, optionIndex: number) => {
    title: string;
    text: string;
};
/**
 * Заменяем все < и > на &lt; и &gt;.
 *
 * @param {string} content Содержимое Markdown-а.
 */
export declare function replaceTagsForMarkdown(content: any): string;
