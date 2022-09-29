import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AccountServicesService} from "../account-services.service";

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent   {
 users!: string[];

  constructor(private accountService:AccountServicesService) {
    this.users = accountService.activeUsers
  }

  onSetToInactive(id: number) {
    this.accountService.onSetToInactive(id)
  }
}
