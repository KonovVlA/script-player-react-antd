/**
 * Свойства компонента из redux store.
 *
 * @prop {string[]} phases Все фазы скрипта.
 * @prop {string} currentPhase Текущая фаза скрипта.
 */
export interface IStateToProps {
    phases: string[];
    currentPhase: string;
}
/**
 * Свойства компонента вызывающие действия redux.
 *
 * @prop {Function} onChangePhase Переключение фазы.
 */
export interface IPropsDispatch {
    onChangePhase: (phaseName: string) => void;
}
/**
 * Свойства компонента по переключению фаз.
 */
export interface IPhaseControlProps extends IStateToProps, IPropsDispatch {
}
export declare const mapStateToProps: (store: any, ownProps: any) => IStateToProps;
export declare const mapDispatchToProps: (dispatch: any, ownProps: any) => IPropsDispatch;
/**
 * Экспортируем функцию-обёртку над компонентом, возвращающую законекченный к store компонент.
 * Возвращаемый компонент получает из store props в соответствии с интерфейсом IPhaseControlProps.
 * T - Собственные props компонента Component.
 */
export default function phaseControlWrapper<T>(Component: any): import("react-redux").ConnectedComponent<any, any>;
