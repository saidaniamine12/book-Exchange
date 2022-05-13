import { Injectable } from "@angular/core";
import  io from 'socket.io-client';
import { Observable } from "rxjs";

@Injectable()
export class WebSocketService {
     
    private socket = io('http://localhost:3000/user/chat');
     
    joinRoom(data)
    {
        this.socket.emit('join',data);
    }

    newUserJoined()
    {
        let observable = new Observable<{user:String, message:String}>(observer=>{
            this.socket.on('new user joined', (data)=>{
                observer.next(data);
            });
            return () => {this.socket.disconnect();}
        });

        return observable;
    }

    leaveRoom(data){
        this.socket.emit('leave',data);
    }

    userLeftRoom(){
        let observable = new Observable<{user:String, message:String}>(observer=>{
            this.socket.on('left room', (data)=>{
                observer.next(data);
            });
            return () => {this.socket.disconnect();}
        });

        return observable;
    }

    sendMessage(data)
    {
        this.socket.emit('message',data);
    }
    listen(eventname: string)  {
        return new Observable((subscribe) =>{
            this.socket.on(eventname, (data)=>{
                subscribe.next(data);
            })
        })

    }
    emit(eventname: string, data:any){
        this.socket.emit(eventname,data);
    }

    newMessageReceived(){
        let observable = new Observable<{user:String, message:String}>(observer=>{
            this.socket.on('new message', (data)=>{
                observer.next(data);
            });
            return () => {this.socket.disconnect();}
        });

        return observable;
    }
    



}