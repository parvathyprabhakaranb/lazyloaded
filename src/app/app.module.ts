import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ RouterModule} from '@angular/router';
import { FormsModule }   from '@angular/forms'; 
import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { AddprojectComponent } from './addproject/addproject.component';
import { MainComponent } from './main/main.component';
import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { TimecardComponent } from './timecard/timecard.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    AddprojectComponent,
    MainComponent,
    TimecardComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,
    HttpModule,

    FormsModule,
    RouterModule.forRoot([
      {
        path:'abhi1',
        component:ProjectComponent
      },
      {
        path:'abhi2',
        component:AddprojectComponent
      },
      {
        path:'abhi3',
        component:TimecardComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
