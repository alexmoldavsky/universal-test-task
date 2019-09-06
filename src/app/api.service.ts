import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getPostList() {
    return this.http.get<Post[]>('https://my-json-server.typicode.com/alexmoldavsky/universal-test-task/posts');
  }

  addPost(post: Post) {
    delete post.id;
    post.imgPath = window.btoa(post.imgPath);
    return this.http.post<Post>('https://my-json-server.typicode.com/alexmoldavsky/universal-test-task/posts', post);
  }

  updatePost(post: Post) {
    return this.http.put<Post>(`https://my-json-server.typicode.com/alexmoldavsky/universal-test-task/posts/${post.id}`, post);
  }

  deletePost(postId: number) {
    return this.http.delete<Post>(`https://my-json-server.typicode.com/alexmoldavsky/universal-test-task/posts/${postId}`);
  }
}
