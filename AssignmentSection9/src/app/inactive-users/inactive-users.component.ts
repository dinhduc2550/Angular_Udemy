import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AccountServicesService} from "../account-services.service";

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {

  constructor(private accountService:AccountServicesService) {
    this.users = accountService.inactiveUsers
  }

  ngOnInit(): void {
  }

   users!: string[];

  onSetToActive(id: number) {
    this.accountService.onSetToActive(id)
  }

}
