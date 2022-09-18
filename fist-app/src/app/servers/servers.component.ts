import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  // template: '<app-server></app-server><app-server></app-server>',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  // styles:[
  //   `
  //
  //   `
  // ]
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Test server';
  userName = '';
  serverCreated = false;
  servers = ['Testserver','Testserver 2']
  passWord: string ='Secret Password = tuna';
  recordLog:any = [];
  countClickDisplayDetail = 1;
  isDetail = true;
  showSecret: boolean = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer(event: Event) {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus =
      'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;

  }
  onCreateUserName(event: Event) {
    // let rs:String = (<HTMLInputElement>event.target).value;
    // if(rs!=='')
    // this.userName ='User Name is ' + rs
  }
  onClickBtnAdd(event:Event){
    let rs:String = (<HTMLInputElement>event.target).value;
    console.log(rs)
    if(rs!='')
    this.userName ='User Name is ' + (<HTMLInputElement>event.target).value;
    else this.userName=''
  }
  onResetUserName(){
    this.userName = ''
  }

  onClickToggleDisplay() {
    this.passWord = 'Oh u found me!!'
    let currentDate = new Date().toLocaleTimeString();
    this.recordLog.push(currentDate);
    if(this.countClickDisplayDetail%5===0){
      console.log(this.recordLog.toString())
    }
    this.countClickDisplayDetail++;
    console.log(this.countClickDisplayDetail)
  }
}
