import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainPanelComponent } from './main-panel/main-panel.component';
import { SubPanelComponent } from './sub-panel/sub-panel.component';
import { SubSubPanelComponent } from './sub-sub-panel/sub-sub-panel.component';
import { MicroPanelComponent } from './micro-panel/micro-panel.component';
import { NanoPanelComponent } from './nano-panel/nano-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPanelComponent,
    SubPanelComponent,
    SubSubPanelComponent,
    MicroPanelComponent,
    NanoPanelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
