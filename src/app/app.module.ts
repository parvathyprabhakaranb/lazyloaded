import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ RouterModule,Routes} from '@angular/router';
import { FormsModule }   from '@angular/forms'; 
import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { AddprojectComponent } from './project/addproject/addproject.component';
import { MainComponent } from './main/main.component';
import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { TimecardComponent } from './timecard/timecard.component';
//import { ProjectModule }   from './project/project.module'; 
//import { TimecardModule }   from './timecard/timecard.module'; 
//import {AddprojectModule} from './addproject/addproject.module';
import { ModuleWithProviders } from '@angular/core';
@NgModule({
  declarations: [
    AppComponent,
    
    MainComponent,
   
                ],
  imports: [
    BrowserModule,HttpClientModule,HttpModule,FormsModule,
    
    RouterModule.forRoot([
      //lazy loaded routing 
      { path: 'project', loadChildren: './project/project.module#ProjectModule' },
    

      
      { path: 'timecard', loadChildren: './timecard/timecard.module#TimecardModule' },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
