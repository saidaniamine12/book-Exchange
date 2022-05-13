import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-view-all-products-by-category',
  templateUrl: './view-all-products-by-category.component.html',
  styleUrls: ['./view-all-products-by-category.component.css']
})
export class ViewAllProductsByCategoryComponent implements OnInit {


  searchCategory = '';
  productList:any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((data:any) => {
      this.searchCategory = data.category;
      
      
    });
    this.productsService.searchCategoryProducts(this.searchCategory).subscribe(data => {
      this.productList = data ;
    })
  }
}
