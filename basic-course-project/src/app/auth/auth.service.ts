import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {BehaviorSubject, catchError, Subject, tap, throwError} from "rxjs";
import {User} from "./user.model";
import {Router} from "@angular/router";
import {environment} from "../../environments/environment";

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean
}

@Injectable({providedIn: 'root'})
export class AuthService {
  API_KEY = 'AIzaSyCbsMaefJ2B4lmLQ9YU2LFbOiqcST-YR2k'
  user = new BehaviorSubject<User>(null)
  private tokenExpirationTimer: any;
  constructor(private http: HttpClient, private router: Router) {
  }

  signUp(email: string, password: string) {
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + environment.firebaseAPIKey,
      {email: email, password: password, returnSecureToken: true})
      .pipe(catchError(this.handleError), tap(responseData => {
          this.handleAuthentication(responseData.email, responseData.localId, responseData.idToken, +responseData.expiresIn)
        })
      );
  }

  login(email: string, password: string) {
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + this.API_KEY,
      {email: email, password: password, returnSecureToken: true})
      .pipe(catchError(this.handleError), tap(responseData => {
        this.handleAuthentication(responseData.email, responseData.localId, responseData.idToken, +responseData.expiresIn)
      }))
  }

  autoLogin() {
    const userData: {
      email: string, id: string, _token: string,
      _tokenExpirationDate: string
    } = JSON.parse(localStorage.getItem('userData'))
    if (!userData) {
      return;
    }
    const loadedUser = new User(userData.email, userData.id, userData._token,
      new Date(userData._tokenExpirationDate ))

    if(loadedUser.token){
      this.user.next(loadedUser)
      const expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime()
      this.autoLogout(expirationDuration)
    }
  }

  logout() {
    this.user.next(null);
    this.router.navigate(['auth'])
    localStorage.removeItem('userData')
    if(this.tokenExpirationTimer){
      //clear set timeout
      clearTimeout(this.tokenExpirationTimer)
    }
    this.tokenExpirationTimer = null
  }
  autoLogout(expirationDuration:number){
    //auto logout in 2 sec
    this.tokenExpirationTimer = setTimeout(()=>{
      this.logout()
    },expirationDuration)
  }

  private handleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
    const expirationDate = new Date(new Date().getTime() + +expiresIn * 1000)
    const user = new User(email, userId, token, expirationDate)
    //localId = userId
    this.user.next(user)
    this.autoLogout(expiresIn * 1000)
    localStorage.setItem('userData', JSON.stringify(user))
  }

  private handleError(errorResponse: HttpErrorResponse) {
    let errorMessage = 'An unknown error occured!'
    if (!errorResponse.error || !errorResponse.error.error) {
      return throwError(() => new Error(errorMessage))
    }
    switch (errorResponse.error.error.message) {
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'Email này chưa được đăng ký'
        break
      case 'INVALID_PASSWORD':
        errorMessage = 'Sai mật khẩu'
        break
      case 'USER_DISABLED':
        errorMessage = 'Tài khoản bị vô hiệu hoá'
        break
      case 'EMAIL_EXISTS':
        errorMessage = 'Email này đã được đăng ký'
        break
    }
    return throwError(() => new Error(errorMessage))
  }
}
