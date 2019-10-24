import { EventEmitter } from '@angular/core';

export interface DataDialog<T = any> {
    onClose: EventEmitter<T>;
}
