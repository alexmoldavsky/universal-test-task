import { Component, OnInit } from '@angular/core';
import { Post } from './../post.model';
import { PostListService } from './../post-list.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  postList: Post[] = [];

  
  constructor(private postListService: PostListService) { }

  ngOnInit() {
    this.postList = this.postListService.getPostList(); 
    this.postListService.postListChanged.subscribe((newList: Post[]) => {
      this.postList = newList
    });
  }

}
