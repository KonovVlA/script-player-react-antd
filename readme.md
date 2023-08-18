# SSP. Плеер скриптов.

React компонент для отображения динамических форм на экране, которые задаются через специальный скрипт.
В результате прохождения скрипта формируется контекст, который выдаётся в результате.
Для скрипта можно передать на вход инициализирующий контекст.

Редактор скриптов:
- [репозиторий](https://sbtatlas.sigma.sbrf.ru/stash/projects/SSP/repos/ssp-script-editor-ui/browse)
- [стенд редактора](http://10.53.66.32/ssp-script-editor/)

Плеер:
- [стенд плеера](http://10.53.66.32/ssp-player/)

Примеры скриптов:
- [Заказ продукта](mock/rest/v2/getScript/post_tengri.json)
- [Все виджеты](mock/rest/v2/getScript/post_show_all_widgets.json)

## Стенд в Sigma
- [dev](http://10.53.66.32/ssp-player-dev/)
- [stable](http://10.53.66.32/ssp-player/)

## Deploy
* dev
```bash
./tool/deployDev.sh
```
* stable
```bash
./tool/deployStable.sh
```

**Подробная информация о стендах и деплое есть тут:**

[Основные ссылки и материалы](https://confluence.sberbank.ru/pages/viewpage.action?pageId=7307133675)

## Подключение
```bash
npm install --save @sber-ssp-ui/script-player-react-antd
```

## Обязательные зависимости в проекте
- "@ant-design/icons": ">= 4.7.0"
- "antd": ">= 4.18.0 < 4.19.0" (`antd-mask-input@0.1.15` не совместим c `antd@4.19.0`)
- "lodash": ">= 4.17.0"
- "react": ">= 17.0.0"
- "react-dom": ">= 17.0.0"


## Использование в стороннем проекте

1. Импортировать и подключить компонент плеера, передать обязательные props
```tsx
import { Player, IScriptRs, IPlayerContext } from '@sber-ssp-ui/script-player-react-antd';

interface IPlayerView {
  /** Скрипт для плеера. */
  script: IScriptRs;  
  /** Уникальное имя скрипта в редьюсере плеера. */
  scriptName: string;
  /** Результат прохождения скрипта. */
  onResult: (res: IPlayerContext) => void;
  /** Внешний контест для инициализации скрипта. */
  outsideContext?: IPlayerContext;  
  /** Пользовательские компоненты. */
  customWidgets?: IWidgetDefinition<any>[];
  /** Вызывается при смене фазы. */
  onPhaseChange?: (phase: string) => void;
  /** Выводит список отображений об ошибках. */
  onError?: (errors: IScriptBlockError[]) => void;
  /** Режим "только просмотр" для просмотра скрипта, без возможности изменения. */
  onlyShow?: boolean;
  /** Название для перехода к следующему блоку при режиме "только просмотр". */
  onlyShowNextLabel?: string;
  /** Внешняя функция для сохранения текущей истории плеера */
  onChangeHistory?: (history: IHistoryContext[]) => void;
  /** Cписок маркетплейсов */
  marketPlaceList?: string[];
  /** Внешний компонент для отрисовки блоков */
  SectionComponent?: JSXElementConstructor<ISectionComponentProps>;
}

/** Отрисовка компонента. */
const PlayerView = (props: IPlayerView) => {
  return (
    <Player
      script={props.script}
      scriptName="my_script"
      onResult={props.onResult}
      outsideContext={props.outsideContext ? props.outsideContext : {}}
      customWidgets={[]}
      onPhaseChange={console.log}
      onChangeHistory={onChangeHistory}
      marketPlaceList={props.marketPlaceList}
    />
  );
};
```

2. Подключить стили анта

```ts
import 'antd/dist/antd.css';
```

Если при этом вам нужна инкапсуляция стилей анта, то вместо подключения всех стилей можно подключить заранее подготовленный наш файл (должен быть установлен less loader)
```ts
import '@sber-ssp-ui/script-player-react-antd/dist/styles/ant-global.less'
```

При этом нужно обернуть плеер дивом с классом `ssp-ant-styles`
```html
<div className="ssp-ant-styles">
  <Player />
</div>
```

3. Подключить стили плеера.

Если требуется [кастомизация](https://ant.design/docs/react/customize-theme) плеера через LESS-переменные, необходимо импортировать следующий файл и подключить less-loader:
```tsx
import '@sber-ssp-ui/script-player-react-antd/dist/styles/index.less';
```
Если кастомизация плеера не требуется, достаточно импортировать следующий файл:
```tsx
import '@sber-ssp-ui/script-player-react-antd/dist/styles/index.css';
```

4. Для корректной работы локализации в календаре, нужно подключить в wepback.config плагин [antd-dayjs-webpack-plugin](https://www.npmjs.com/package/antd-dayjs-webpack-plugin) и подключить в проект файл локализации для day.js
```js
import dayjs from 'dayjs';
import 'dayjs/locale/ru';

dayjs.locale('ru_RU');
```

## Доступные функции для взаимодействия с плеером.

### Перезапуск скрипта с заданным контекстом
```ts
import { restartAndRunScript, IScriptRs, IPlayerContext, IRestartAndRunScriptPayload } from '@sber-ssp-ui/script-player-react-antd';

restartAndRunScript(data as IRestartAndRunScriptPayload);
```

### Очистка данных скрипта
```ts
import { clearScriptData } from '@sber-ssp-ui/script-player-react-antd';

clearScriptData(SCRIPT_NAME as string);
```

### Восстанавливаем история прохождения скрипта

```ts
import { restoreScriptHistory, IHistoryContext } from '@sber-ssp-ui/script-player-react-antd';

restoreScriptHistory(scriptName as string, history as IHistoryContext[]);
```

### Получение текущего контекста

```ts
import { getCurrentContext, IPlayerContext } from '@sber-ssp-ui/script-player-react-antd';

const context: IPlayerContext = getCurrentContext(scriptName as string);
```

# Разработка
Проект написан на `TypeScript`.
В режиме разработки можно собственные скрипты для отладки.

1). Настроить .npmrc

- Убедиться, что есть доступ к http://nexus.sigma.sbrf.ru:8099/nexus, если нет то создать заявку на получение доступов https://confluence.sberbank.ru/pages/viewpage.action?pageId=849021130
- Убедиться, что у вас установлена Node версии не ниже 16.13.0 и npm не ниже 8 версии

- Создайте файл в домашней директории: ~/.npmrc

```
init-author-name="<Ваше имя>"
init-author-email="<Ваш внутренний email>"
registry="http://nexus.sigma.sbrf.ru:8099/nexus/content/groups/npm-all/"
always-auth=true
_auth="<credentials>"
```

Поле _auth нужно заполнить данными учётной записи от домена:

MacOS: выполните команду `echo -n 'login:password' | openssl base64`

Windows: Создайте файл in.txt, в котором запишите login:password. Выполнить команду certutil /encode in.txt out.txt

2). Установить зависимости
```
npm i
```

3). Запуск:

```bash
npm run start:dev
```

Открываем http://localhost:8081, можно работать!

4). Сборка:

- Сборка для деплоя на стенд
```bash
npm run build:app
```

- Сборка как библиотеки
```bash
npm run build:lib
```

**Полезно:**

1). Форматирование:
```bash
npm run format:write
```
