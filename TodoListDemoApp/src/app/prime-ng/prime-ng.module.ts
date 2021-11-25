import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TableModule,
    ToolbarModule,
    ButtonModule,
    DialogModule
  ],
  exports:[
    TableModule,
    ToolbarModule,
    ButtonModule,
    DialogModule

  ]
})
export class PrimeNgModule { }
