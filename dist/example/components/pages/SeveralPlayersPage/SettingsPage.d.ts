import React from 'react';
import { IScriptData } from './SeveralPlayersPage';
interface ISettingsPage {
    scriptsData: IScriptData[];
    setScriptsData: any;
}
export declare const SettingsPage: ({ scriptsData, setScriptsData, }: ISettingsPage) => React.ReactElement;
export {};
