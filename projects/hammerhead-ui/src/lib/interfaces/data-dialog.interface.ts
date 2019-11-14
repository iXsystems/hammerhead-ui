import { EventEmitter } from '@angular/core';

export interface DataDialog<T = any> {
    data?: any;
    onClose: EventEmitter<T>;
}
