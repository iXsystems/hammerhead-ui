import { Observable } from 'rxjs';

export interface DataTableConfig<T = any> {
    columns: DataTableColumnConfig[];
    rowActions?: DataTableAction<T>[];
    rowActionsWidth?: string;
    data?: Observable<T[]>;
    tableHeight?: string;
    headerRowClass?: string;
    trackByFn?: (index: number, row: T) => any;
    hasGlobalFilter?: boolean;
    zeroStateMessage?: string;
    isMasterDetail?: boolean;
}

export interface DataTableColumnConfig {
    property: string;
    isHidden?: boolean;
    isSortable?: boolean;
    width?: string;
    name?: string; // Title-cased 'property' by default
    isAsync?: boolean;
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

export interface DataTableSortConfig {
    column: DataTableColumnConfig;
    direction: 'ascending' | 'descending';
}
