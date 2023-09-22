import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent } from './tab/tab.component';
import { ReactiveFormsModule } from '@angular/forms';

import { ModelComponent } from './model/model.component';
import { InputComponent } from './input/input.component';
import { TabsContainerComponent } from './tabs-container/tabs-container.component';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { AlertComponent } from './alert/alert.component';


@NgModule({
  declarations: [
    ModelComponent,
    TabsContainerComponent,
    TabComponent,
    InputComponent,
    AlertComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxMaskDirective, 
    NgxMaskPipe
  ],
  exports: [
    ModelComponent,
    TabComponent,
    TabsContainerComponent,
    InputComponent,
    AlertComponent
  ],
  providers: [provideNgxMask()]
})
export class SharedModule { }
