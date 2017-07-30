import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverId = 10;
  serverStatus = 'Offline';
  allowNewServer;
  serverCreationStatus = 'No server was created';
  serverName;

  constructor() { }

  ngOnInit() {
    this.allowNewServer = false;
  }

  addServer(){
  this.serverCreationStatus = this.serverName + ' was created succesfully';
  this.allowNewServer = false;
  this.serverName = '';
  }

  allowServer(event: any){
    if(this.serverName === ''){
      this.allowNewServer = false;
    }else{
      this.allowNewServer = true;
    }
  }



  // updateServer(event: any){
  //   this.serverName = (<HTMLInputElement>event.target).value;
  // }
}
