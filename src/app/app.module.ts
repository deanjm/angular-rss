import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReaderPaneComponent } from './reader-pane/reader-pane.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FeedComponent } from './feed/feed.component';


@NgModule({
  declarations: [
    AppComponent,
    ReaderPaneComponent,
    NavigationComponent,
    FeedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
