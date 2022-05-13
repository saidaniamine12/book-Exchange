import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-view-all-product',
  templateUrl: './view-all-product.component.html',
  styleUrls: ['./view-all-product.component.css']
})
export class ViewAllProductComponent implements OnInit {

  
  productList :any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService,
    
    ) { }

  ngOnInit(): void {
    this.productsService.listProducts().subscribe((data:any) => {
      this.productList = data ;
      console.log(this.productList);
      
      
      
      

    })
      
    
    
    

  
  }

}
