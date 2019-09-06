import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

 // private serverDomain = 'https://my-json-server.typicode.com/alexmoldavsky/universal-test-task';
  private serverDomain = 'http://localhost:3000';
  

  getPostList() {
    return this.http.get<Post[]>(this.serverDomain+'/posts');
  }

  addPost(post: Post) {
    delete post.id;
    return this.http.post<Post>(this.serverDomain+'/posts', post);
  }

  updatePost(post: Post) {
    return this.http.put<Post>(this.serverDomain+`/posts/${post.id}`, post);
  }

  deletePost(postId: number) {
    return this.http.delete<Post>(this.serverDomain+`/posts/${postId}`);
  }
}
