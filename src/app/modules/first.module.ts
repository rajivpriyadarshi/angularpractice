import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdButtonModule, MdCheckboxModule, MdTooltipModule, MdTabsModule, MdSelectModule,
  MdRadioModule, MdProgressBarModule, MdDialogModule, MdInputModule, MdProgressSpinnerModule, MdSlideToggleModule
} from '@angular/material';

@NgModule({
  imports: [CommonModule, MdButtonModule, MdCheckboxModule, MdTooltipModule, MdTabsModule, MdSelectModule, MdRadioModule, MdProgressSpinnerModule, MdProgressBarModule, MdInputModule, MdDialogModule, MdSlideToggleModule],
  exports: [MdButtonModule, MdCheckboxModule, MdTooltipModule ,MdTabsModule,MdSelectModule,MdRadioModule,MdProgressSpinnerModule,MdProgressBarModule,MdInputModule,MdDialogModule,MdSlideToggleModule],
  declarations: [],
  providers: []
})
export class firstModule { }
