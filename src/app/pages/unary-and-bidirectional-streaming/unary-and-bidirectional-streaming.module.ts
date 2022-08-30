import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnaryAndBidirectionalStreamingComponent } from './unary-and-bidirectional-streaming.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedMaterialModule } from 'src/app/shared-material.module';



@NgModule({
  declarations: [
    UnaryAndBidirectionalStreamingComponent
  ],
  imports: [
    CommonModule,
    SharedMaterialModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: UnaryAndBidirectionalStreamingComponent,
      }
    ]),
  ]
})
export class UnaryAndBidirectionalStreamingModule { }
