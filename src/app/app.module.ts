import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ RouterModule,Routes} from '@angular/router';
import { FormsModule }   from '@angular/forms'; 
import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { AddprojectComponent } from './addproject/addproject.component';
import { MainComponent } from './main/main.component';
import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { TimecardComponent } from './timecard/timecard.component';
import { ProjectModule }   from './project/project.module'; 
import { TimecardModule }   from './timecard/timecard.module'; 
import { ModuleWithProviders } from '@angular/core';
@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    AddprojectComponent,
    MainComponent,
    TimecardComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,ProjectModule,TimecardModule,
    HttpModule,ProjectModule,

    FormsModule,
    RouterModule.forRoot([
      // {
        // path:'project',
        //component:ProjectComponent
       // loadChildren: 'project/project.module#ProjectModule'
      // },
      {
        path:'addproject',
        component:AddprojectComponent
      },
      //{
       // path:'timecard',
       // component:TimecardComponent
      //}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
