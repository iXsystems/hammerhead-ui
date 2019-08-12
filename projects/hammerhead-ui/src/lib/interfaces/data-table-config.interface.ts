import { Observable } from 'rxjs';

export interface DataTableConfig {
    columns: DataTableColumnConfig[];
    rowActions?: DataTableAction[];
    data?: any[];
    dataAsync?: () => Observable<any>;
    dataAsyncMapper?: (elements: any[]) => any[];
}

export interface DataTableColumnConfig {
    property: string;
    isHidden?: boolean;
    isSortable?: boolean;
    name?: string; // Title-cased 'property' by default
}

export interface DataTableAction {
    id: string;
    isIcon: boolean;
    onClick: (row: any, event: MouseEvent) => Observable<any> | void;
    actionText?: string;
    icon?: string;
    isActionVisible?: (row: any) => boolean;
}
