import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { SharedMaterialModule } from './shared-material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedMaterialModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'unary', loadChildren: () => import('./pages/unary/unary.module').then(m => m.UnaryModule) },
      { path: 'server-streaming', loadChildren: () => import('./pages/server-streaming/server-streaming.module').then(m => m.ServerStreamingModule) },
      { path: 'client-streaming', loadChildren: () => import('./pages/client-streaming/client-streaming.module').then(m => m.ClientStreamingModule) },
      { path: 'bidirectional-streaming', loadChildren: () => import('./pages/bidirectional-streaming/bidirectional-streaming.module').then(m => m.BidirectionalStreamingModule) },
      { path: '', component: AppComponent },
      { path: '**', redirectTo: '' }
    ], { relativeLinkResolution: 'legacy' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
