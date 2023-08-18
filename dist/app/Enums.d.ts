/**
 * Состояния загрузки данных.
 *
 * IDLE - Изначальное состояние.
 * LOADING - Идёт загрузка.
 * SUCCESS - Успех.
 * ERROR - Произошла ошибка.
 */
export declare enum EStatus {
    IDLE = "IDLE",
    LOADING = "LOADING",
    SUCCESS = "SUCCESS",
    ERROR = "ERROR"
}
/**
 * Состояния завершения скрипта.
 *
 * SUCCESS - Успех.
 * ERROR - Произошла ошибка.
 */
export declare enum EResultType {
    SUCCESS = "SUCCESS",
    ERROR = "ERROR"
}
/**
 * Типы блоков.
 * SCREEN - Экран.
 * CALC - Расчёт контекста.
 * ROUTER - Роутер.
 * MONITOR - Отправить данные в ФП Бизнес Мониторинг.
 * START - Начало скрипта.
 * STOP - Выход из скрипта.
 */
export declare enum EBlockType {
    SCREEN = "SCREEN",
    CALC = "CALC",
    ROUTER = "ROUTER",
    MONITOR = "MONITOR",
    START = "START",
    STOP = "STOP"
}
/**
 * Типы переменных для props компонент в формате сервера.
 *
 * OBJECT - Объект.
 * ARRAY - Массив.
 * STRING - Строка.
 * NUMBER - Число.
 * BOOLEAN - Флаг.
 * TEMPLATE - Шаблонная строка.
 * LINK - Переменная контекста.
 * DATE - Дата.
 * EXPRESSION - Выражение.
 */
export declare enum EPropRsType {
    OBJECT = "object",
    ARRAY = "array",
    STRING = "string",
    NUMBER = "number",
    BOOLEAN = "boolean",
    TEMPLATE = "template",
    LINK = "link",
    DATE = "date",
    EXPRESSION = "expression"
}
/**
 * Типы существующих в системе виджетов.
 *
 * EMAIL_INPUT_BLOCK - Поле ввода электронной почты.
 * TEXT_INPUT_BLOCK - Простое поле ввода.
 * TEXTAREA_BLOCK - Многострочное поле ввода.
 * TEXT_BLOCK - Простой текст.
 * SELECT_BLOCK - Выбор значения из выпадающего списка.
 * RADIO_GROUP_BLOCK - Группа радиобаттонов.
 * CHECKBOX_GROUP_BLOCK - Группа чекбоксов.
 * BUTTON_GROUP_BLOCK - Группа кнопок.
 * NUMBER_INPUT_BLOCK - Текстовое поле для ввода цифр.
 * MASKED_INPUT_BLOCK - Маскированное поле ввода.
 * DATE_INPUT_BLOCK - Поле ввода даты.
 * PHONE_INPUT_BLOCK - Поле ввода телефона.
 * ACCORDION_BLOCK - Аккордеон.
 * BUTTON_ROUTE - Кнопка с переходом.
 * MENU_ROUTE - Список с переходами ( меню ).
 * MARKDOWN_BLOCK - Блок вывода форматированного текста.
 * PLAIN_TABLE_BLOCK - Блок вывода таблицы.
 * SWITCH - Горизонтальный тумблер/переключатель.
 * ALERT_BLOCK - Блок с уведомлением ALERT
 * DATE_RANGE_BLOCK - Выбор диапазона дат
 * TEXT_FIELD_WITH_TITLE - Текстовый блок с заголовком и кнопкой копировать
 * DIVIDER - Разделитель
 * HEADER - Заголовок
 */
export declare enum EDefaultWidget {
    EMAIL_INPUT_BLOCK = "EmailInputBlock",
    TEXT_INPUT_BLOCK = "TextInputBlock",
    TEXT_PASSWORD_BLOCK = "TextPasswordBlock",
    TEXTAREA_BLOCK = "TextareaBlock",
    TEXT_BLOCK = "TextBlock",
    SELECT_BLOCK = "SelectBlock",
    RADIO_GROUP_BLOCK = "RadioGroupBlock",
    CHECKBOX_GROUP_BLOCK = "CheckboxGroupBlock",
    BUTTON_SELECTOR_BLOCK = "ButtonSelectorBlock",
    NUMBER_INPUT_BLOCK = "NumberInputBlock",
    MASKED_INPUT_BLOCK = "MaskedInputBlock",
    DATE_INPUT_BLOCK = "DateInputBlock",
    PHONE_INPUT_BLOCK = "PhoneInputBlock",
    ACCORDION_BLOCK = "AccordionBlock",
    BUTTON_ROUTE = "ButtonRoute",
    MENU_ROUTE = "MenuRoute",
    MARKDOWN_BLOCK = "MarkdownBlock",
    PLAIN_TABLE_BLOCK = "PlainTableBlock",
    SWITCH = "Switch",
    DATE_RANGE_BLOCK = "DateRangeBlock",
    ALERT_BLOCK = "AlertBlock",
    TEXT_FIELD_WITH_TITLE = "TextFieldWithTitle",
    DIVIDER = "Divider",
    HEADER = "Header"
}
/**
 * Выравнивание по горизонтали.
 *
 * LEFT - к левому краю.
 * CENTER - по центру.
 * RIGHT - к правому краю.
 */
export declare enum EHorizontalAlign {
    LEFT = "left",
    CENTER = "center",
    RIGHT = "right"
}
/**
 * Выравнивание по вертикали.
 *
 * TOP - к верхнему краю.
 * MIDDLE - по центру.
 * BOTTOM - к нижнему краю.
 */
export declare enum EVerticalAlign {
    TOP = "top",
    MIDDLE = "middle",
    BOTTOM = "bottom"
}
/**
 * Оформление столбца.
 *
 * DEFAULT - по умолчанию.
 * BOLD - жирный текст.
 * NUMBER - вывод целого числа.
 * MONEY - вывод числа с двумя знаками после запятой.
 */
export declare enum EColumnStyle {
    DEFAULT = "default",
    BOLD = "bold",
    NUMBER = "number",
    MONEY = "money"
}
/**
 * Типы ошибок.
 *
 * GLOBAL - Глобальная ошибка.
 * GLOBAL_ASYNC - Глобальная ошибка в асинхронном вызове.
 * PLAYER_EXPECTED - Ошибка плеера (обработанная).
 * BLOCK_EXPECTED - Ошибка при обработке блоков (обработанная).
 * SERVER_EXPECTED - Ошибка при запросе или обработки данных с сервера (обработанная).
 * CALCULATE_EXPECTED - Ошибка при вычислениях (обработанная).
 * WIDGET_EXPECTED - Ошибка в виджете (обработанная).
 *
 * FROM_SERVER - Ошибка от сервера, при обработке запроса (Не должно логироваться, так как сам BH логирует).
 */
export declare enum EErrorType {
    GLOBAL = "GLOBAL",
    GLOBAL_ASYNC = "GLOBAL_ASYNC",
    PLAYER_EXPECTED = "PLAYER_EXPECTED",
    BLOCK_EXPECTED = "BLOCK_EXPECTED",
    SERVER_EXPECTED = "SERVER_EXPECTED",
    CALCULATE_EXPECTED = "CALCULATE_EXPECTED",
    WIDGET_EXPECTED = "WIDGET_EXPECTED",
    FROM_SERVER = "FROM_SERVER"
}
/**
 * Типы компонентов.
 *
 * MARKETPLACE - маркетплейс
 * CUSTOM - Созданный компонент
 * DEFAULT - стандартный
 */
export declare enum EComponentType {
    MARKETPLACE = "marketplace",
    CUSTOM = "custom",
    DEFAULT = "default"
}
/**
 * Типы Form layouts
 */
export declare enum EFormLayout {
    VERTICAL = "vertical",
    HORIZONTAL = "horizontal"
}
/**
 * Размеры заголовков
 */
export declare enum EHeaderSize {
    H1 = 1,
    H2 = 2,
    H3 = 3,
    H4 = 4,
    H5 = 5
}
/**
 * Виды  разделителя
 */
export declare enum EDividerViewType {
    SOLID = "solid",
    DASHED = "dashed"
}
