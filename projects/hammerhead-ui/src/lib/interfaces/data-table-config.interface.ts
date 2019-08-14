import { Observable } from 'rxjs';

export interface DataTableConfig<T = any> {
    columns: DataTableColumnConfig[];
    rowActions?: DataTableAction<T>[];
    rowActionsWidth?: string;
    data?: Observable<T[]>;
    hasGlobalFilter?: boolean;
}

export interface DataTableColumnConfig {
    property: string;
    isHidden?: boolean;
    isSortable?: boolean;
    width?: string;
    name?: string; // Title-cased 'property' by default
}

export interface DataTableAction<T> {
    id: string;
    onClick: (row: T, event: MouseEvent) => Observable<T> | void;
    actionColor?: 'primary' | 'accent' | 'warn';
    actionText?: string;
    isIcon?: boolean;
    icon?: string;
    isActionVisible?: (row: T) => boolean;
}
