import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { PlayerCard } from './atoms/player-card/player-card';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DragZone } from './atoms/drag-zone/drag-zone';

@NgModule({
  declarations: [
    App,
    PlayerCard,
    DragZone
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
