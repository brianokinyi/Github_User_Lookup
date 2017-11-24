import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private http:Http){}
  userName='';
  Details="";
  searchUser(){
  	this.http.get('https://api.github.com/users/'+this.userName).
  	subscribe(
  		(res:Response)=>{
  			const details= res.json();
  			console.log(details);
        this.Details=details;
  		}
  		)
  }


  
}
