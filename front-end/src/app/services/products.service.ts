import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  name : String;
  author : String;
  description : String;
  imagelink : String;
  price : String;
  category : String;
  rating : String;
  userphone : String;
  useremail : String;


  constructor(private http:HttpClient) { }

  createProduct(productBody){
    const  url = 'http://localhost:3000/user/createbook';
    return this.http.post(url, productBody);  //return an observable

  }
  viewProduct(productId){
    const  url = 'http://localhost:3000/user/book/'+productId;
    return this.http.get(url); //return this.http.get(url, productId); 
    //return this.http.delete(url)

  }
  deleteProduct(productId){
    const  url = `http://localhost:3000/user/deletebook/${productId}`;
    return this.http.get(url);

  }
  updateProduct(productId, productbody){
    const  url = `http://localhost:3000/user/updatebook/${productId}`;
    return this.http.get(url, productbody);

  }
  searchCategoryProducts(category){
    const  url = 'http://localhost:3000/user/book?category='+category;
    return this.http.get(url); //return this.http.get(url, category);

  }
  listProducts(){
    const  url = 'http://localhost:3000/user/allbooks';
    return this.http.get(url);
  }
}
