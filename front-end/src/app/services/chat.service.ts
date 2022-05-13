import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

const socket = io ('http://localhost:3000');
@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private socket: Socket;
  private url = 'http://localhost:3000'; // your server local path

  constructor(private http:HttpClient) {
    this.socket = io(this.url, {transports: ['websocket', 'polling', 'flashsocket']});
  }



  

  joinRoom(data): void {
    this.socket.emit('join', data);
  }
  

    // this.socket.emit('message',data =>{
    //   console.log(data);
      
    // })
    
  

  sendMessage(data): void {
    if(data.message.length > 0){
    this.socket.emit('message', data);
    console.log('message',JSON.stringify(data));
    
    
    
    
    
    this.socket.on('new message',(data)=> {  })
  }else(console.log('cannot send empty message ')
  )
  //   let headers = new HttpHeaders();
  //   headers.append('Content-Type','application/jason');
  //   return this.http.post('http://localhost:3000/user/chat', data ,{headers: headers})



  //   .pipe(map(res => res));
   }



  getMessage(): Observable<any>  {
    return new Observable<{user: string,room: string, message: string}>(observer => {
      
      this.socket.on('new message', (data) => {
        observer.next(data);
      });

      return () => {
        this.socket.disconnect();
      }
    });
  }
  

  getStorage() {
    const storage: string = localStorage.getItem('chats');
    return storage ? JSON.parse(storage) : [];
  }

  setStorage(data) {
    localStorage.setItem('chats', JSON.stringify(data));
  }

}