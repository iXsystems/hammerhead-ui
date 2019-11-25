import { ConnectedPosition, Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal, ComponentType } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { merge, Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { DataDialog } from '../../interfaces/data-dialog.interface';

@Injectable()
export class ProximityDialogService {
    private static readonly OVERLAY_CONFIG: OverlayConfig = {
        disposeOnNavigation: true,
        maxHeight: '100vh',
        maxWidth: '100vw',
        hasBackdrop: true
    };

    constructor(private overlay: Overlay) {}

    /**
     * Creates a dialog near the anchorEl. Type `T` is the data
     * structure returned by the dialog component when it closes.
     */
    public open<T = any>(
        component: ComponentType<DataDialog<T>>,
        anchorEl: HTMLElement,
        data?: any,
        position: ConnectedPosition = {
            originX: 'end',
            originY: 'top',
            overlayX: 'start',
            overlayY: 'top'
        }
    ): Observable<T | boolean> {
        const overlayRef = this.overlay.create({
            ...ProximityDialogService.OVERLAY_CONFIG,
            positionStrategy: this.overlay
                .position()
                .flexibleConnectedTo(anchorEl)
                .withPositions([position]),
            scrollStrategy: this.overlay.scrollStrategies.block()
        });

        const dialog = overlayRef.attach(new ComponentPortal(component));
        dialog.instance.data = data;

        return merge(overlayRef.backdropClick().pipe(map(() => false)), dialog.instance.onClose.asObservable()).pipe(
            take(1),
            tap(() => overlayRef.dispose())
        );
    }
}
