import { NgModule,ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project.component';
import{ RouterModule,Routes} from '@angular/router';
import {AddprojectComponent} from './addproject/addproject.component';
@NgModule({
  imports: [CommonModule,
    //lazyloading ..leave path empty
  RouterModule.forChild([
      { path: '', component: ProjectComponent },

      { path: 'addproject', component: AddprojectComponent },
   ])
  ],
  declarations: [ ProjectComponent,AddprojectComponent]
})
export class ProjectModule {


  
 }
