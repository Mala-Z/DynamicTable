/**
 * Created by marcosuarez on 11/26/17.
 */

import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {HttpClient} from "@angular/common/http";
import 'rxjs/add/operator/map';
import { HttpModule} from '@angular/http';
import {Observable} from "rxjs/Observable";
@Injectable ()
export class BrainService{

  url = 'http://assignment.siteimprove.com/api/persons';
  brains= [];
  constructor(
    private http: HttpClient
  ){}

  getBrain(){
      return this.http.get('http://assignment.siteimprove.com/api/persons')
    }

  /*getBrain2(){
    this.http.get('url')
      .map((response)=> response.json())
    .subscribe(data => {
      // Read the result field from the JSON response.
      this.brains = data['brains'];
      (data) => console.log(data);
    });
  }*/
}
