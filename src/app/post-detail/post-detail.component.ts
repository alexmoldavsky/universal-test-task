import { Component, OnInit, Input } from '@angular/core';
import { Post } from './../post.model';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  postItem: Post;

  constructor() {}

  ngOnInit() {
    this.postItem = window.history.state.post;
    
  }

}
