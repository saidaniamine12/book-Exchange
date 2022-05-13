import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }


  validateRegister(user){
    if(user.email == undefined || user.password == undefined){
      return false;
    } else {
      return true ;
    }
  }

  // validateEmail(user){
    
  //   return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user.email);
  // }




}
