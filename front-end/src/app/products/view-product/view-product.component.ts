import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  productDetail : any;
  productId:any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data : any)=> {
      this.productId = data.id;
    })


    this.productsService.viewProduct(this.productId).subscribe((data :any)=>{
      this.productDetail = data;
      
      
      console.log(this.productDetail);
      console.log(this.productDetail.name);
      console.log(this.productDetail.price);
      console.log(this.productDetail.author);
     

      
      
      
    });

  }
 



}
