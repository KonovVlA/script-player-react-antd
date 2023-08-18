export declare enum PlayerActionTypes {
    /** Перезагрузка скрипта */
    PLAYER_RESTART_SCRIPT = "PLAYER_RESTART_SCRIPT",
    /** Загрузка скрипта плеера */
    PLAYER_START_SCRIPT_LOAD = "PLAYER_START_SCRIPT_LOAD",
    /** Устанавливаем загруженный скрипт в редьюсер */
    PLAYER_GET_SCRIPT_DATA_SUCCESS = "PLAYER_GET_SCRIPT_DATA_SUCCESS",
    /** Запись ошибки загрузки скрипта */
    PLAYER_GET_SCRIPT_DATA_ERROR_CLEAR = "PLAYER_GET_SCRIPT_DATA_ERROR_CLEAR",
    /** Обновление контекста плеера. */
    PLAYER_UPDATE_CONTEXT_DIFF = "PLAYER_UPDATE_CONTEXT_DIFF",
    /** Возврат на предыдущий экран с восстановлением контекста */
    PLAYER_GO_BACK = "PLAYER_GO_BACK",
    /** Переключение фокуса между блоками скрипта в процессе воспроизведения */
    PLAYER_FOCUS_BLOCK = "PLAYER_FOCUS_BLOCK",
    /** Сброс контекста и истории скрипта на исходное состояние */
    PLAYER_RESTART = "PLAYER_RESTART",
    /** Очистка информации о скрипте и заполненных данных. */
    PLAYER_CLEAR_SCRIPT_DATA = "PLAYER_CLEAR_SCRIPT_DATA",
    /** Восстановление истории скрипта */
    PLAYER_RESTORE_SCRIPT_HISTORY = "PLAYER_RESTORE_SCRIPT_HISTORY",
    /** Запись ошибки при обработке блока. */
    PLAYER_SCRIPT_ERROR = "PLAYER_SCRIPT_ERROR",
    /** Очистка ошибки при обработке блока */
    PLAYER_SCRIPT_ERROR_CLEAR = "PLAYER_SCRIPT_ERROR_CLEAR",
    /** Запись ошибки, возникшей при обработке плеера. */
    PLAYER_ERROR = "PLAYER_ERROR",
    /** Очистка ошибки, возникшей при обработке плеера. */
    PLAYER_ERROR_CLEAR = "PLAYER_ERROR_CLEAR",
    /** Произошла ошибка при выполнении вычислений. */
    PLAYER_CALCULATE_ERROR = "PLAYER_CALCULATE_ERROR",
    /** Очистка ошибки при вычислении выражений. */
    PLAYER_CALCULATE_ERROR_CLEAR = "PLAYER_CALCULATE_ERROR_CLEAR",
    /** Очистить историю для Бизнес Мониторинга */
    PLAYER_CLEAR_MONITOR_HISTORY = "PLAYER_CLEAR_MONITOR_HISTORY",
    /** Добавить данные для Бизнес Мониторинга */
    PLAYER_ADD_MONITOR_TO_HISTORY = "PLAYER_ADD_MONITOR_TO_HISTORY",
    /** Установка времени показа текущего экрана */
    PLAYER_ON_START_SHOW_SCREEN = "PLAYER_ON_START_SHOW_SCREEN",
    /** Сброс текущего контекста экрана */
    RESET_SCREEN_CONTEXT = "RESET_SCREEN_CONTEXT",
    /** Получение текущей версии скрипта */
    PLAYER_GET_VERSION = "PLAYER_GET_VERSION",
    /** Сохраняем карту пользовательских виджетов */
    PLAYER_SET_CUSTOM_WIDGET_MAP = "PLAYER_SET_CUSTOM_WIDGET_MAP"
}
