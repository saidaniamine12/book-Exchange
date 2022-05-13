import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';

import { WebSocketService } from './services/web.socket.service';

import { AppComponent } from './app.component';
import { NewcompComponent } from './newcomp/newcomp.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignUpComponent } from './sign-up/sign-up.component';
//import { BooksComponent } from './books/books.component';

import { CommunityComponent } from './community/community.component';
import { FooterComponent } from './footer/footer.component';
import { HelpComponent } from './help/help.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ChatComponent } from './chat/chat.component';

import { AuthService } from './services/auth.service';
import {ValidateService } from './services/validate.service'
import { FlashMessagesModule } from 'flash-messages-angular';
import { UserFormComponent } from './user-form/user-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ProductsComponent } from './products/products.component';
@NgModule({
  declarations: [
    AppComponent,
    NewcompComponent,
    NavbarComponent,
    SignUpComponent,
    //ProductsComponent,
   
    CommunityComponent,
    FooterComponent,
    HelpComponent,
    SignInComponent,
    ChatComponent,
    UserFormComponent,
    RegisterFormComponent,
    ProfileComponent,
    EditProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
  
    FlashMessagesModule.forRoot()
    
  ],
  providers: [AuthService, ValidateService,WebSocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
