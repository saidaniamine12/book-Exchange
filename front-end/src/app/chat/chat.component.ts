import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'flash-messages-angular';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit ,AfterViewInit {

  @ViewChild('popup', {static: false}) popup: any;

  public roomId: string;
  public messageText:string;
  public messageArray: { user: string, message: string }[] = [];
  private storageArray = [];

  public showScreen = false;
  public phone: string;
  public currentUser;
  public selectedUser;

  public userList = [
    {
      id: 1,
      name: 'Hsan sandid',
      phone: '2',
      image: '../assets/user/user-1.png',
      roomId: {
        2: 'room-1',
        3: 'room-2'
        //4: 'room-3'
      }
    },
    {
      id: 2,
      name: 'aziz younes',
      phone: '3',
      image: '../assets/user/user-2.png',
      roomId: {
        1: 'room-1',
        3: 'room-4'
        //4: 'room-5'
      }
    },
    {
      id: 3,
      name: 'mohamed amine',
      phone: '1',
      image: '../assets/user/user-3.png',
      roomId: {
        1: 'room-2',
        2: 'room-4'
        //4: 'room-6'
      }
    },
    // {
    //   id: 4,
    //   name: '',
    //   phone: '9876556789',
    //   image: 'assets/user/user-4.png',
    //   roomId: {
    //     1: 'room-3',
    //     2: 'room-5',
    //     3: 'room-6'
    //   }
    // }
  ];

  constructor(
    private modalService: NgbModal,
    private flashMessage:FlashMessagesService,
    private chatService: ChatService,
    private router:Router,
  ) {
  }
//here i changed the sender:string to user:string 
  ngOnInit(): void {
    this.chatService.getMessage()
      .subscribe((data: { user: string, room: string, message: string }) => {
        // this.messageArray.push(data);
        if (this.roomId) {
          setTimeout(() => {
            this.storageArray = this.chatService.getStorage();
            const storeIndex = this.storageArray
              .findIndex((storage) => storage.roomId === this.roomId);
            this.messageArray = this.storageArray[storeIndex].chats;
          }, 500);
        }
      });
  }

  ngAfterViewInit(): void {
    this.openPopup(this.popup);
  }

  openPopup(content: any): void {
    this.modalService.open(content, {backdrop: 'static', centered: true});
  }

  login(dismiss: any): void {
    this.currentUser = this.userList.find(user => user.phone === this.phone.toString());
    this.userList = this.userList.filter((user) => user.phone !== this.phone.toString());

    if (this.currentUser) {
      this.showScreen = true;
      dismiss();
     }else{
       this.flashMessage.show('Wrong pasword ',{ cssClass: 'alert-danger', timeout: 5000 });
      
    }
  }
  cancel(dismiss:any) : void {
    dismiss();
    this.router.navigate(['/home']);
  }

  selectUserHandler(phone: string): void {
    this.selectedUser = this.userList.find(user => user.phone === phone);
    this.roomId = this.selectedUser.roomId[this.currentUser.id];
    this.messageArray = [];

    this.storageArray = this.chatService.getStorage();
    const storeIndex = this.storageArray
      .findIndex((storage) => storage.roomId === this.roomId);

    if (storeIndex > -1) {
      this.messageArray = this.storageArray[storeIndex].chats;
    }

    this.join(this.currentUser.name, this.roomId);
  }

  join(username: string, roomId: string): void {
    this.chatService.joinRoom({user: username, room: roomId});
  }
  

  sendMessage(): void {
    this.chatService.sendMessage({
      user: this.currentUser.name,
      room: this.roomId,
      message: this.messageText
      
      
    });

    this.storageArray = this.chatService.getStorage();
    const storeIndex = this.storageArray
      .findIndex((storage) => storage.roomId === this.roomId);

    if (storeIndex > -1) {
      this.storageArray[storeIndex].chats.push({
        user: this.currentUser.name,
        message: this.messageText
      });
    } else {
      const updateStorage = {
        roomId: this.roomId,
        chats: [{
          user: this.currentUser.name,
          message: this.messageText
        }]
      };

      this.storageArray.push(updateStorage);
    }

    this.chatService.setStorage(this.storageArray);
    this.messageText = '';
  }

}

// import { Component, OnInit } from '@angular/core';
// import { WebSocketService } from '../services/web.socket.service';

// @Component({
//   selector: 'app-root',
//   templateUrl: './chat.component.html',
//   styleUrls: ['./styles.scss'],
//   providers: [WebSocketService]
// })

// export class ChatComponent implements OnInit {
  
//   userName: string;
//   room: string;
//   message: string;
//   output: any[] = [];
//   feedback: string;
//   messageArray: Array<{userName:string,message:string}> = [];
  


//   constructor(private _chatService: WebSocketService) {
//     this._chatService.newUserJoined()
//     .subscribe((data:any) => {this.messageArray.push(data)});

//     this._chatService.newMessageReceived()
//     .subscribe((data:any) => {this.messageArray.push(data)});
    
//    }
//   ngOnInit(): void {
//     this._chatService.listen('typing').subscribe((data : any)=>{this.updateFeedback(data)});
//     this._chatService.listen('chat').subscribe((data:any)=>{this.updateMessage(data)});

    
//   }
//   updateMessage(data:any){
//     this.feedback='';
//     if(!!!data) return;
//     this.output.push(data);
//   }
//   updateFeedback(data: any): void {
//     this.feedback = `${data} is typing a message`
//   }



//   join(){
//     this._chatService.joinRoom({user:this.userName,room:this.room});
//   }

//   messageTyping(): void {
//     console.log(`${this.userName} is typing`);
//     this._chatService.emit('typing',this.userName);
    
//   }

//   sendMessage() {
//     console.log({
//       message: this.message,
//       handle: this.userName
//     });
//     this._chatService.sendMessage({userName:this.userName, romm:this.room, message:this.message});
    
    

//   }

 

// }