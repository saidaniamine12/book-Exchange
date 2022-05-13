import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { BooksComponent } from './books/books.component';

import { ChatComponent } from './chat/chat.component';
import { CommunityComponent } from './community/community.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { HelpComponent } from './help/help.component';
import { NewcompComponent } from './newcomp/newcomp.component';
import { ProductsComponent } from './products/products.component';
import { ProfileComponent } from './profile/profile.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';



const routes: Routes = [
  {path:'',component:NewcompComponent},
  {path:'chat',component:ChatComponent},
  //{path: 'books', component:BooksComponent},
  {path: 'home' , component:NewcompComponent},
  {path: 'books', component:ProductsComponent},
  {path: 'community' , component:CommunityComponent},
  {path: 'help' , component:HelpComponent},
  {path:'sign-in' , component:SignInComponent},
  {path:'sign-up' , component:SignUpComponent},
  {path:'profile' , component:ProfileComponent},
  {path:'edit-profile' , component:EditProfileComponent},
  { path: 'books', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
