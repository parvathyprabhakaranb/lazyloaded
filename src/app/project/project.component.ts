import { Component, OnInit } from '@angular/core';

export class Search {
  
 projectname: string;
}
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  search: Search= {
    
    projectname: ""
  };
  

}
