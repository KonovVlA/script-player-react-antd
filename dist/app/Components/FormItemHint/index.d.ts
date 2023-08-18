import React from 'react';
import { TooltipProps } from 'antd';
/**
 * Функция возвращает данные для формирования тултипа для Form.Item
 *
 * @param {string} hint - содержимое подсказки
 */
export declare const getFormItemHint: (hint?: string) => TooltipProps & {
    icon: React.ReactNode;
};
