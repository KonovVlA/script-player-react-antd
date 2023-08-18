/**
 * Типы расположения ссылок
 *
 * VERTICAL - вертикально
 * HORIZONTAL - горизонтально
 */
export declare enum ELinkDirection {
    VERTICAL = "vertical",
    HORIZONTAL = "horizontal"
}
/**
 * Типы алертов
 *
 * SUCCESS - успешно
 * INFO - информация
 * WARNING - информация
 * ERROR - ошибка
 */
export declare enum EAlertType {
    SUCCESS = "success",
    INFO = "info",
    WARNING = "warning",
    ERROR = "error"
}
/**
 * Типы атрибута target для ссылок
 *
 * SELF - открыть в текущей вкладке
 * BLANK - открыть в новой вкладке
 * PARENT - открыть в родительском окне
 * TOP = - открыть в окне высшего уровня
 */
export declare enum ETargetType {
    SELF = "_self",
    BLANK = "_blank",
    PARENT = "_parent",
    TOP = "_top"
}
