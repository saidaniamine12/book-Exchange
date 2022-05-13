import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'flash-messages-angular';
import { Router } from '@angular/router';
import { ValidateService } from '../services/validate.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
     email:string;
     password:string;







  constructor(
    private flashMessage:FlashMessagesService,
    private router:Router,
    private validateService:ValidateService,
    private authService:AuthService


  ) { }






  ngOnInit(): void {
  }
  onLoginSubmit(){
    const user = {
      email: this.email,
      password: this.password
    }

    
    
    








   //required field
   if(!this.validateService.validateRegister(user)){
     this.flashMessage.show('Please fill in all fields',{ cssClass: 'alert-danger', timeout: 3000 });
     return false;
   }



   this.authService.authenticateUser(user).subscribe((data:any) => {
     if(!data.mail){
    this.flashMessage.show(' You are not registred or verify your email',{ cssClass: 'alert-danger', timeout: 5000 });
     this.router.navigate(['/sign-in']);
     

     }else if(!data.pass && data.mail){
      this.flashMessage.show('Wrong pasword',{ cssClass: 'alert-danger', timeout: 5000 });
      
     

     } else if (data.mail && data.pass){
      this.authService.storeUserData(data.token,data.userId);
      this.flashMessage.show('You are logged in',{ cssClass: 'alert-success', timeout: 2000 });
      this.router.navigate(['/chat']);
      
      


    }
     
   } )
 
 
 }


}
