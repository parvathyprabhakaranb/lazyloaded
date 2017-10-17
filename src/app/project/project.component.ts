import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'


import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

export class Search {
  
 projectname: string;
}
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  dataUrl = 'assets/data/data.json'
  results;
  datas:any={};
  constructor(private http: Http,
    private httpClient: HttpClient) { }

  ngOnInit() {
     // Make the HTTP request:
     this.httpClient.get(this.dataUrl).subscribe(res => {
      console.log(res)
      this.datas=res;
      
      
    });
  }
  search: Search= {
    
    projectname: ""
  };
  

}
