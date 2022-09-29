import {Component, OnInit} from '@angular/core';
import {AccountServicesService} from "./account-services.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountServicesService]
})
export class AppComponent implements OnInit{
  accountsActive:string[]=[]
  accountInActive:string[]=[]
  constructor(private accountService:AccountServicesService) {
  }

  ngOnInit(){
    this.accountsActive = this.accountService.activeUsers
    this.accountInActive = this.accountService.inactiveUsers
  }

}
