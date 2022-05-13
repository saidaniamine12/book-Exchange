import { Component, OnInit } from '@angular/core';
import { AppServiceService } from './app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Firstapp';
  verif =true;
  constructor(private service : AppServiceService){

  }

  ngOnInit(){

  }
  getDataFromApi(){
    this.service.getData().subscribe((resonse)=>{
      console.log('response from Api is ', resonse)
      }, (error) => {
      console.log('error is', error);
      })
  }
}
