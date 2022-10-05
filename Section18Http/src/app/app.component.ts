import {HttpClient} from '@angular/common/http';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {map} from "rxjs/operators";
import {Post} from "./post.model";
import {PostService} from "./post.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy{

  title = 'Section18Http';
  loadedPosts:Post[] = [];
  isFetching = false
  error = null;
  private errorSub:Subscription
  constructor(private http: HttpClient,private postService:PostService) {
  }

  ngOnInit() {
    this.errorSub = this.postService.error.subscribe(errorMessage=>{
      this.error = errorMessage
    })
  }

  onCreatePost(postData: Post) {
    this.postService.createAndStorePost(postData.title,postData.content)
  }

  onFetchPosts() {
    // Send Http request
    this.isFetching = true
    this.postService.fetchPosts().subscribe(posts => {
      this.isFetching= false
      this.loadedPosts = posts
    }, error => {
      this.isFetching = false
      this.error = error.message
      console.log(error)
    })
  }

  onClearPosts() {
    // Send Http request
    this.postService.deletePost().subscribe(()=>{
      this.loadedPosts = [];
    })
  }

  ngOnDestroy(): void {
    this.errorSub.unsubscribe()
  }

  onHandleError() {
    this.error = null
  }
}
