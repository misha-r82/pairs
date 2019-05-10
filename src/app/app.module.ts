import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StrPairComponent } from './str-pair/str-pair.component';
import { PairListComponent } from './pair-list/pair-list.component';

@NgModule({
  declarations: [
    AppComponent,
    StrPairComponent,
    PairListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
