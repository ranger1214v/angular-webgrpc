import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnaryComponent } from './unary.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedMaterialModule } from 'src/app/shared-material.module';



@NgModule({
  declarations: [
    UnaryComponent,
  ],
  imports: [
    CommonModule,
    SharedMaterialModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: UnaryComponent,
      }
    ]),
  ]
})
export class UnaryModule { }
