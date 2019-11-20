export interface ContextmenuItem<T = any> {
    label: string;
    icon: string;
    onClick: (entity: T, event?: MouseEvent) => void;
}
