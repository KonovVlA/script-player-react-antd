import React from 'react';
import { IVersionInfo } from '../Models';
/**
 * Свойства компонента.
 *
 * @prop {boolean} useCustom Использовать ли кастомное решение или InfoVersion.
 * @prop {IVersionInfo} versionInfo Информация о версии с бека.
 */
export interface IProps {
    useCustom?: boolean;
    versionInfo: IVersionInfo;
}
/**
 * Отображение информации о версии.
 */
export declare class VersionInfo extends React.Component<IProps, null> {
    renderVersionInfo(versionInfo: IVersionInfo): string;
    render(): JSX.Element;
}
