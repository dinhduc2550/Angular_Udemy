import {Injectable} from "@angular/core";
import {HttpClient, HttpEventType, HttpHeaders, HttpParams} from "@angular/common/http";
import {Post} from "./post.model";
import {catchError, map, tap} from "rxjs/operators";
import {Subject, throwError} from "rxjs";

@Injectable({providedIn: 'root'})
export class PostService {
  error = new Subject<string>()

  constructor(private http: HttpClient) {
  }

  createAndStorePost(title: string, content: string) {
    const postData: Post = {title, content}
    // Send Http request
    this.http.post<{ name: string }>('https://section18-http-requests-606f5-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json',
      postData,
      {
        observe: 'response'
      }
    ).subscribe(responseData => {
      console.log(responseData.body)
    }, error => {
      this.error.next(error.message)
    })
  }

  fetchPosts() {
    let searchParam = new HttpParams();
    searchParam = searchParam.append('print', 'prety')
    searchParam = searchParam.append('custom', 'key')
    return this.http.get<{ [key: string]: Post }>('https://section18-http-requests-606f5-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json',
      {
        headers: new HttpHeaders({'Custom-header': 'Hello'}),
        //add query params to url http://.....json?print=pretty&...
        // params: new HttpParams().set('print','pretty')
        //c2: multi params
        params: searchParam
      })
      .pipe(map(responseData => {
          const postArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key))
              postArray.push({...responseData[key], id: key})
          }
          return postArray
        }),
        catchError(errorRes => {
          return throwError(errorRes);
        })
      )
  }

  deletePost() {
    return this.http.delete('https://section18-http-requests-606f5-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json',
      {
        observe: 'events'
      }).pipe(
        tap(event=>{
          if(event.type === HttpEventType.Sent){

          }
         if(event.type === HttpEventType.Response){
           console.log(event.body)
         }
        })
    )
  }
}
