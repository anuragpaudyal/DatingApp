import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.css']
})
export class ValuesComponent implements OnInit {

  loadeddata = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getvalues();
  }
  getvalues(){
    this.http.get('http://localhost:5000/api/values').subscribe(
      responsedata => { console.log(responsedata); }
    );
  }

}
