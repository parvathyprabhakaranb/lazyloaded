import { NgModule,ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project.component';
import{ RouterModule,Routes} from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
  RouterModule.forChild([
      { path: 'project', component: ProjectComponent }
   ])
  ],
  declarations: [ ]
})
export class ProjectModule {


  
 }
