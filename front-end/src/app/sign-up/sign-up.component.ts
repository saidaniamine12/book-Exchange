//import { isDelegatedFactoryMetadata } from '@angular/compiler/src/render3/r3_factory';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ValidateService } from '../services/validate.service';
import { FlashMessagesService } from 'flash-messages-angular';
import { Router } from '@angular/router';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
    email:string;
     password:string;


  constructor(
    private authService: AuthService,
    private validateService:ValidateService,
    private flashMessage:FlashMessagesService,
    private router:Router
    
    
    ) { }

   ngOnInit(): void {
   }
  
   onSignupSubmit(){
    const user = {
      email: this.email,
      password: this.password
    }
    

    //required field
    if(!this.validateService.validateRegister(user)){
      this.flashMessage.show('Please fill in all fields',{ cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }


    // //validate email
    // if(!this.validateService.validateRegister(user.email)){
    //   this.flashMessage.show('Please use a valid email',{ cssClass: 'alert-danger', timeout: 3000 });
    //   return false;
    // }




    //Register user to the database now
    this.authService.registerUser(user).subscribe(DAta => {
      
      
      if(DAta={message: 'User created ! .'}){
        this.flashMessage.show('Your accout is  created you may login ',{ cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/sign-in'])
        
        
      } else {
        this.flashMessage.show('Please use a valid email',{ cssClass: 'alert-danger', timeout: 3000 });
        this.router.navigate(['/signup']);
      }
    }
    );
  }
}

