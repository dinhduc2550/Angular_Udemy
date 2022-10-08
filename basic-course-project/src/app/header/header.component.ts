import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {DataStorageService} from "../shared/data-storage.service";
import {AuthService} from "../auth/auth.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false
  private userSubscription: Subscription

  constructor(private dataStoreService: DataStorageService, private authService: AuthService) {
  }

  onSaveData() {
    this.dataStoreService.storeRecipes()
  }

  onFetchData() {
    this.dataStoreService.fetchRecipes().subscribe()
  }

  ngOnInit(): void {
    this.userSubscription = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user

    })
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe()
  }

  onLogout() {
    this.authService.logout()
  }
}
