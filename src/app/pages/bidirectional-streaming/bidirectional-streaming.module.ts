import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BidirectionalStreamingComponent } from './bidirectional-streaming.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedMaterialModule } from 'src/app/shared-material.module';



@NgModule({
  declarations: [
    BidirectionalStreamingComponent
  ],
  imports: [
    CommonModule,
    SharedMaterialModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: BidirectionalStreamingComponent,
      }
    ]),
  ],
})
export class BidirectionalStreamingModule { }
