import { Observable } from 'rxjs';

export interface DataTableConfig {
    columns: DataTableColumnConfig[];
    rowActions?: DataTableAction[];
    rowActionsWidth?: string;
    data?: any[];
    dataAsync?: () => Observable<any>;
    dataAsyncMapper?: (elements: any[]) => any[];
    hasGlobalFilter?: boolean;
}

export interface DataTableColumnConfig {
    property: string;
    isHidden?: boolean;
    isSortable?: boolean;
    width?: string;
    name?: string; // Title-cased 'property' by default
}

export interface DataTableAction {
    id: string;
    onClick: (row: any, event: MouseEvent) => Observable<any> | void;
    actionColor?: 'primary' | 'accent' | 'warn';
    actionText?: string;
    isIcon?: boolean;
    icon?: string;
    isActionVisible?: (row: any) => boolean;
}