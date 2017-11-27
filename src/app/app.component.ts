import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {BrainService} from "./shared/brains.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  brains= [];

  url = 'http://assignment.siteimprove.com/api/persons';



  data: any;


  constructor(private _brainService: BrainService){}

 ngOnInit(){
   this._brainService.getBrain().subscribe(data=> this.data = data);
 }


}
