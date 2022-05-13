import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'flash-messages-angular';
import { ProductsService } from 'src/app/services/products.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  name :String;
  author :String;
  description :String;
  imageLink :String;
  price :String;
  category :String;
  rating :String;
  userphone :String;
  useremail :String;



  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService,
    private router:Router,
    private flashMessage:FlashMessagesService,
  ) { }

  ngOnInit(): void {
  }
  OnSubmitSave(){
    const product = {
      name : this.name,
      author : this.author,
      description : this.description,
      imageLink : this.imageLink,
      price : this.price,
      category : this.category,
      rating : this.rating,
      userphone : this.userphone,
      useremail : this.useremail
    }
   
    

    this.productsService.createProduct(product).subscribe(data =>{
      
      
      if(data={success: true, mesg: 'book saved'}){

        this.flashMessage.show('Your post is  created you may continue browsing ',{ cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/books/list-books'])
      } else {
        this.flashMessage.show('problem occured please resubmit',{ cssClass: 'alert-danger', timeout: 3000 });
        
      }

    })

  }

}
