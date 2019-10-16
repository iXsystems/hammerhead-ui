import { TooltipPosition } from '@angular/material';
import { Observable } from 'rxjs';

export interface DataTableConfig<T = any> {
    columns: DataTableColumnConfig[];
    rowActions?: DataTableAction<T>[];
    isMultiSelect?: boolean;
    multiSelectActions?: DataTableAction<T>[];
    rowActionsWidth?: string;

    /**
     * Optional custom attribute to bind to table header, cell and action elements.
     * Ex. <p hh-custom-attribute="row1_name">Hello world</p>
     */
    customAttribute?: string;

    /* The property key used to uniquely identify data elements. */
    rowIdentifierProperty?: string;

    /* If provided, used to generate custom attribute values for action buttons */
    actionCustomAttributeValue?: (row: T, action: DataTableAction<T>) => string;

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
    name?: string; // Uppercased 'property' by default
    isAsync?: boolean;
}

export interface DataTableAction<T> {
    id: string;
    onClick: (row: T, event: MouseEvent) => Observable<T> | void;
    actionColor?: 'primary' | 'accent' | 'warn';
    actionText?: string;
    isIcon?: boolean;
    icon?: string;
    isActionVisible?: (row?: T) => boolean;
    minWidth?: string;
    tooltip?: {
        text: string;
        position?: TooltipPosition;
    };
}

export interface DataTableSortConfig {
    column: DataTableColumnConfig;
    direction: 'ascending' | 'descending';
}
