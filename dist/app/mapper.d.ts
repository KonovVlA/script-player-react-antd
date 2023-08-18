import { EPropRsType } from './Enums';
import { IMacroDefinitionRs, IPropsRs, IScriptDetails, IScriptRs, IPlayerContext, TESection, TLowercase, TEPropRsType } from './Models';
/**
 * Преобразование скрипта из ответа на сервере.
 *
 * @param {IScriptRs} scriptResponse Ответ REST-сервиса.
 */
export declare function convertScriptFromServer(scriptResponse: IScriptRs): IScriptDetails;
/**
 * Преобразование свойства виджетов, полученных с сервера, в используемый проигрывателем формат.
 */
export declare function propsFromServerFormat(props: IPropsRs[]): {};
/**
 * Преобразование свойства виджетов, полученных с сервера, в используемый проигрывателем формат.
 *
 * @param {string} value значение с строковом формате
 * @param {IPropsRs} type Свойство в формате с сервера.
 */
export declare function convertSimpleValue(value: string, type: TEPropRsType): unknown;
/**
 * Преобразование макросов, полученных с сервера, в используемый проигрывателем формат.
 *
 * @param {IMacroDefinitionRs[]} macros макросы
 */
export declare function convertMacroFromServer(macros: IMacroDefinitionRs[]): {};
/**
 * Преобразование данных секции.
 *
 * @param {string | boolean} value значение
 * @param {EPropRsType | TESection} type тип данных
 * @param {IPlayerContext} context текущий контекст
 */
export declare function getSectionParam(value: string | boolean, type: TLowercase<EPropRsType.BOOLEAN> | TESection, context: IPlayerContext): any;
