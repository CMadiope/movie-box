import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';
import { TabComponent } from './tab/tab.component';
import { TabsContainerComponent } from './tabs-container/tabs-container.component';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    InputComponent,
    ModalComponent,
    TabComponent,
    TabsContainerComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    NgxMaskModule.forRoot(),
  ],
  exports: [
    InputComponent,
    ModalComponent,
    TabsContainerComponent,
    TabComponent,
  ],
})
export class SharedModule {}
