import {Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthResponseData, AuthService} from "./auth.service";
import {Observable, Subscription} from "rxjs";
import {Router} from "@angular/router";
import {AlertComponent} from "../shared/alert/alert.component";
import {PlaceholderDirective} from "../shared/placeholder/placeholder.directive";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, OnDestroy {
  isLoginMode = true;
  isLoading = false;
  error: string = null;
  @ViewChild(PlaceholderDirective, {static: false}) alertHost: PlaceholderDirective

  private closeSub: Subscription

  constructor(private authService: AuthService, private router: Router, private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnDestroy(): void {
    if (this.closeSub) {
      this.closeSub.unsubscribe()
    }
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode
  }

  ngOnInit(): void {
  }

  onSubmit(authForm: NgForm) {
    if (!authForm.valid) {
      return
    }
    const email = authForm.value.email
    const password = authForm.value.password

    let authObservable: Observable<AuthResponseData>;

    this.isLoading = true
    if (this.isLoginMode) {
      authObservable = this.authService.login(email, password)
    } else {
      authObservable = this.authService.signUp(email, password)
    }
    authObservable.subscribe(
      {
        next: responseData => {
          console.log(responseData)
          this.isLoading = false
          this.router.navigate(['/recipes'])
        },
        error: errorMessageResponse => {
          this.isLoading = false
          this.error = errorMessageResponse
          this.showErrorAlert(errorMessageResponse)
        },
        complete: () => {
          console.log('Request complete')
        }
      }
    )
    authForm.reset()
  }

  onHandleError() {
    this.error = null
  }

  private showErrorAlert(message: string) {
    // const alertCmpFactory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent)
    const hostViewContainerRef = this.alertHost.viewContainerRef
    hostViewContainerRef.clear()//xoa nhung gi da hien thi truoc do
    const componentRef = hostViewContainerRef.createComponent(AlertComponent)
    componentRef.instance.message = message;
    this.closeSub = componentRef.instance.close.subscribe(() => {
      this.closeSub.unsubscribe()
      hostViewContainerRef.clear()
    })
  }
}
