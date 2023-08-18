import { IScriptBlockError, IError, IErrorExceptions, IWidgetError } from './Models';
/**
 * Функция конвертации ошибки при запросе или обработки данных с сервера в формат ошибок для логирования в BH.
 *
 * @param {IScriptBlockError} error Ошибка.
 */
export declare function prepareServerErrorExpected(error: IScriptBlockError): IError;
/**
 * Функция конвертации ошибки при обработки данных сервером в формат ошибок для отображения на UI.
 * В BH не логируется, так как уже отлогировано самим BH.
 *
 * @param {IScriptBlockError} error Ошибка.
 */
export declare function prepareFromServerError(error: IScriptBlockError): IError;
/**
 * Функция конвертации ошибки плеера в формат ошибок для логирования в BH.
 *
 * @param {IScriptBlockError} error Ошибка.
 */
export declare function preparePlayerErrorExpected(error: IScriptBlockError): IError;
/**
 * Функция конвертации ошибки при обработке блоков в формат ошибок для логирования в BH.
 *
 * @param {IScriptBlockError} error Ошибка.
 */
export declare function prepareBlockErrorExpected(error: IScriptBlockError): IError;
/**
 * Функция конвертации ошибки при обработке виджета в формат ошибок для логирования в BH.
 *
 * @param {IWidgetError} error Ошибка в виджете.
 */
export declare function prepareWidgetErrorExpected(error: IWidgetError): IError;
/**
 * Функция конвертации ошибки вычислений выражений в формат ошибок для логирования в BH.
 *
 * @param {Error} error Ошибка.
 */
export declare function prepareCalculateErrorExpected(error: Partial<IErrorExceptions> & Partial<IScriptBlockError>): IError;
/**
 * Функция конвертации глобальной ошибки в асинхронном вызове в формат ошибок для логирования в BH.
 *
 * @param {Error} error Ошибка.
 */
export declare function prepareAsyncErrorExpected(error: Error): IError;
/**
 * Функция конвертации глобальной ошибки в формат ошибок для логирования в BH.
 *
 * @param {ErrorEvent} error Ошибка.
 */
export declare function prepareGlobalErrorExpected(error: ErrorEvent): IError;
/**
 * Функция-конструктор кастомной ошибки
 *
 * @param {string} title Заголовок ошибки.
 * @param {string} message Текст ошибки.
 */
export declare class CustomTitleError extends Error {
    title: string;
    constructor(title: any, message: any);
}
