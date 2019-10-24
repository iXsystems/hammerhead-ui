import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal, ComponentType } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { merge, Observable, Subject } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { DataDialog } from '../../interfaces/data-dialog.interface';

/** @dynamic */
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
     * Creates a dialog, without a backdrop, near the anchorEl. Type `T` is the data
     * structure returned by the dialog component when it closes.
     */
    public open<T = any>(component: ComponentType<DataDialog<T>>, anchorEl: HTMLElement): Observable<T | boolean> {
        const overlayDestroyed$ = new Subject<void>();

        const originRect = anchorEl.getBoundingClientRect();

        const overlayRef = this.overlay.create({
            ...ProximityDialogService.OVERLAY_CONFIG,
            positionStrategy: this.overlay
                .position()
                .flexibleConnectedTo({ x: originRect.left - 12, y: originRect.top })
                .withPositions([
                    {
                        originX: 'end',
                        originY: 'bottom',
                        overlayX: 'end',
                        overlayY: 'top'
                    }
                ]),
            scrollStrategy: this.overlay.scrollStrategies.block()
        });

        const dialog = overlayRef.attach(new ComponentPortal(component));

        return merge(overlayRef.backdropClick().pipe(map(() => false)), dialog.instance.onClose.asObservable()).pipe(
            take(1),
            tap(() => {
                overlayRef.dispose();
                overlayDestroyed$.next();
            })
        );
    }
}
