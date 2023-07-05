import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'dockerUI13';
  // url = `http://localhost:42460/`;
  constructor(private httpClient:HttpClient,
    private router:Router) {}
  
  makeApiCall23() {
    const url = `api24/getData24A`;
    this.httpClient.get(url).subscribe(res => {
      console.log(res);
    });   
  }

  showDemo33() {
    console.log('showing demo33');
    window.open(`http://localhost:42458/demo33`, '_self');
  }
}
