import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientStreamingComponent } from './client-streaming.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedMaterialModule } from 'src/app/shared-material.module';

@NgModule({
  declarations: [
    ClientStreamingComponent
  ],
  imports: [
    CommonModule,
    SharedMaterialModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: ClientStreamingComponent,
      }
    ]),
  ]
})
export class ClientStreamingModule { }
