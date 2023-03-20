import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { UserformComponent } from './userform/userform.component';
import {FormsModule} from "@angular/forms";
import { PipeusageComponent } from './pipeusage/pipeusage.component';
import {CustompipePipe} from "./pipes/custompipe.pipe";
import { SummaryPipe } from './pipes/summary.pipe';
import { PostnumberComponent } from './postnumber/postnumber.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    UserformComponent,
    PipeusageComponent,
    CustompipePipe,
    CustompipePipe,
    SummaryPipe,
    PostnumberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
