/**
 * Основная конфигурация компонента.
 *
 * @prop {boolean} restActive Включение mock-ов при true (Если нет back-а).
 * @prop {string} restRoot Корень вызовов REST сервисов.
 * @prop {string} api Версия API.
 */
export interface IConfig {
    restActive: boolean;
    restRoot: string;
    api: string;
}
/**
 * Активны-ли запросы до сервера.
 */
declare let restActive: boolean;
export { restActive };
