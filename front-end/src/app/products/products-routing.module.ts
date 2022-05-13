import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './create-product/create-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ProductsComponent } from './products.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewAllProductByNameComponent } from './view-all-product-by-name/view-all-product-by-name.component';
import { ViewAllProductComponent } from './view-all-product/view-all-product.component';
import { ViewAllProductsByCategoryComponent } from './view-all-products-by-category/view-all-products-by-category.component';
import { ViewAllProductsByDateComponent } from './view-all-products-by-date/view-all-products-by-date.component';
import { ViewProductComponent } from './view-product/view-product.component';



const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'create-book', component: CreateProductComponent },
  { path: 'view-book', component: ViewProductComponent },
  { path: 'list-books', component: ViewAllProductComponent },
  { path: 'create-book', component: CreateProductComponent },
  { path: 'search-category', component: ViewAllProductsByCategoryComponent},
  { path: 'search-date', component: ViewAllProductsByDateComponent},
  { path: 'search-name', component: ViewAllProductByNameComponent},
  { path: 'delete-book/:id', component: DeleteProductComponent},
  { path: 'view-book/:id', component: ViewProductComponent},
  { path: 'update-book/:id', component: UpdateProductComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
