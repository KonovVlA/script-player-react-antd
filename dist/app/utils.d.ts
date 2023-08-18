import { Interpreter } from '@sber-ssp-ui/spruce';
import { EDefaultWidget } from './Enums';
import { IBlockBase, IPlayerContext, IBlockScreen, IBlockCalculation, IScriptCalculateError, IInterpreter, IScriptStore, IContextParam, IWidget } from './Models';
/**
 * Заполняем контекст пустыми свойствами, которые есть в компонентах и расчётах.
 *
 * @param {IBlockBase[]} blocks Блоки.
 */
export declare function initPlayerContext(blocks: IBlockBase[]): IPlayerContext;
/**
 * Клонирование контекста c Big.js.
 *
 * @param {IPlayerContext} context Контекст плеера.
 */
export declare const cloneContext: (context: IPlayerContext) => any;
/**
 * Выбор блока из списка по идентификатору.
 *
 * @param {string} blockId Идентификатор блока.
 * @param {IBlockBase[]} blocks Список блоков.
 */
export declare const getBlockById: (blockId: string, blocks: IBlockBase[]) => IBlockBase;
/**
 * Получение стартового блока для фазы.
 *
 * @param {string} phaseName Имя фазы.
 * @param {IBlockBase[]} blocks Список блоков.
 */
export declare const getPhaseStartBlock: (phaseName: string, blocks: IBlockBase[]) => IBlockBase;
/**
 * Является ли виджетом с переходом на другой блок скрипта.
 *
 * @param {string} name Имя блока.
 */
export declare const isWidgetWithBlockSwitch: (name: EDefaultWidget | string) => boolean;
/**
 * Проверка что число является Big.js
 *
 * @param {any} value Значение числа.
 */
export declare const checkIsBigDecimal: (value: any) => boolean;
/**
 * Проверяет по имени является ли это компонентом из системы.
 *
 * @param {string} widgetName Название компонента.
 */
export declare const isKnownWidget: (widgetName: EDefaultWidget | string) => boolean;
/**
 * Выполнить команду и в случае ошибки, выполнить асинхронный вызов.
 *
 * @param {Function} executeCallback Вызов команды.
 * @param {Function} errorAsyncCallback Вызов ошибки асинхронно.
 * @param {Function} [errorSyncCallback] Вызов ошибки синхронно.
 */
export declare function executeAsync(executeCallback: () => void, errorAsyncCallback: (error: Error) => void, errorSyncCallback?: (error: Error) => void): void;
/**
 * Получаем тип данных объекта.
 *
 * @param {any} value Значение.
 */
export declare function getClass(value: any): string;
export declare function prepareVisibleBlock(scriptStore: IScriptStore, currentBlockId: string, interpreter: IInterpreter): {
    visibleScreenBlock: IBlockScreen;
    scriptCalculateErrors: IScriptCalculateError[];
};
/**
 * Значение параметров компонента не может быть пустым.
 *
 * @param {any} value Значение
 */
export declare const canBeEmptyProp: (value: any) => boolean;
/**
 * Конкатенация только уникальных элементов в массиве.
 *
 * @param {T[]} arrays Исходный массив.
 * @param {T[]} newArr Массив для объединения.
 * @param {string[]} exclude Исключения из сравнения.
 */
export declare function concatUniqArray<T>(arrays: T[], newArr: T[], exclude: string[]): T[];
/**
 * Конкатенация только уникальных элементов в массиве ошибок.
 *
 * @param {IErrorBase[]} arrays Исходный массив.
 * @param {IErrorBase[]} newArr Массив для объединения.
 */
export declare function concatUniqArrayErrors<T>(arrays: T[], newArr: T[]): T[];
/**
 * Конкатенация только уникальных элементов в массиве.
 *
 * @param {T[]} array Исходный массив.
 * @param {T} addElem Новый элемент.
 * @param {string[]} exclude Исключения из сравнения.
 */
export declare function concatUniq<T>(array: T[], addElem: T, exclude: string[]): T[];
/**
 * Форматирование даты для вывода в ошибке.
 *
 * @param {Date} [date] Дата которая будет отформатирована.
 * Если не указана, то dayjs берет new Date().
 */
export declare const formatDate: (date?: Date) => string;
/**
 * Валидация строки на соответствие формату электронной почты
 *
 * @param {string} emailString Валидируемая строка
 * @returns {boolean} результат проверки
 */
export declare function validateEmail(emailString: string): boolean;
/**
 * Воспроизведение блока калькуляции.
 *
 * @param {IBlockCalculation} block Блок расчётов.
 * @param {Interpreter} interpreter Интерпретатор выражений.
 *
 * @returns {IPlayerContext} изменённая часть контекста.
 */
export declare function playCalcBlock(block: IBlockCalculation, interpreter: Interpreter): IPlayerContext;
/**
 * Функция получения входного контекста с учетом переданных входных параметров скрипта
 *
 * @param {IPlayerContext} playerContext Текущий контекст скрипта.
 * @param {IContextParam[]} inputContext Описание входных параметров скрипта.
 *
 * @returns {IPlayerContext|never} Итоговый контекст или выброс ошибки.
 */
export declare function getValidatedInputContext(playerContext: IPlayerContext, inputContext: IContextParam[]): IPlayerContext | never;
/**
 * Функция добавления стилей на страницу из компонента
 *
 * @param {IWidget} widget компонент.
 * @param {string} id id для тега style
 */
export declare function addInlineStyles(widget: IWidget<any>, id: string): void;
/**
 * Функция удаления стилей
 *
 * @param {string} id id тега style
 */
export declare function removeInlineStyles(id: string): void;
