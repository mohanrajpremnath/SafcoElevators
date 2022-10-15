import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MatTabsModule,
    MatGridListModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class MaterialModule { }
