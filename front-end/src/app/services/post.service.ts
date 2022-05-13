import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class PostService {
        user : string;
        name : string;
        pictures : string;
        postcontent: string;
        comments: string;
        like: string;



  constructor(private http:HttpClient) { }


  createPost(PostBody){
    const  url = 'http://localhost:3000/user/createpost';
    return this.http.post(url, PostBody);  //return an observable


  }
  deletePost(PostId){
    const  url = 'http://localhost:3000/user/deletepost/'+PostId;
    return this.http.get(url);

  }
  listPosts(){
    const  url = 'http://localhost:3000/user/allposts';
    return this.http.get(url);
  }  






}
