import { animate, AnimationTriggerMetadata, state, style, transition, trigger } from '@angular/animations';

export enum MasterDetailState {
    MasterShow = 'master-show',
    DetailsShow = 'details-show',
    Void = 'void',
    Wildcard = '*'
}

export const dataTableAnimations: { readonly masterDetailSlide: AnimationTriggerMetadata } = {
    masterDetailSlide: trigger('masterDetailSlide', [
        // Note: transitions to `none` instead of 0, because some browsers might blur the content.
        state(`${MasterDetailState.Void}, ${MasterDetailState.MasterShow}`, style({ transform: 'none' })),

        // If the tab is either on the left or right, we additionally add a `min-height` of 1px
        // in order to ensure that the element has a height before its state changes. This is
        // necessary because Chrome does seem to skip the transition in RTL mode if the element does
        // not have a static height and is not rendered. See related issue: #9465
        state(MasterDetailState.DetailsShow, style({ transform: 'translate3d(-50%, 0, 0)', minHeight: '1px' })),

        transition(
            `${MasterDetailState.MasterShow} => ${MasterDetailState.DetailsShow}, ` +
            `${MasterDetailState.DetailsShow} => ${MasterDetailState.MasterShow}`,
            animate('0.33s cubic-bezier(0.35, 0, 0.25, 1)')
        )
    ])
};
