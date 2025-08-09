import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { PlayerCard } from './molecules/player-card/player-card';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DragZone } from './atoms/drag-zone/drag-zone';
import { TeamCard } from './molecules/team-card/team-card';

@NgModule({
  declarations: [
    App,
    PlayerCard,
    DragZone,
    TeamCard
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
