import { InnerScrollDirective } from './inner-scroll/innerscroll.directive';
import { FlexPerfectScrollbarDirective } from './flex-perfect-scrollbar/flex-perfect-scrollbar.directive';
import { DraggableDialogDirective } from './draggable-dialog/DraggableDialog.directive';
import { NgModule } from '@angular/core';


@NgModule({
    declarations: [
        InnerScrollDirective,
        FlexPerfectScrollbarDirective,
        DraggableDialogDirective
    ],
    imports     : [],
    exports     : [
        InnerScrollDirective,
        FlexPerfectScrollbarDirective,
        DraggableDialogDirective
    ]
})
export class DirectivesModule
{
}
