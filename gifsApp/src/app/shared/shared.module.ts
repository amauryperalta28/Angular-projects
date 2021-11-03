import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  exports:[
    NavbarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
