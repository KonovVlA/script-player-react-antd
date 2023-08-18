import { IMarketPlace } from "../../app/Models";
/**
 *
 * @prop {string[]} marketPlaceList Массив урлов маркетплейсов.
 *
 * @returns {Promise[]} массив выполненных промисов
 */
export declare const fetchLoadMarketPlaceApi: (marketPlaceList: IMarketPlace[]) => Promise<PromiseSettledResult<any>[]>;
