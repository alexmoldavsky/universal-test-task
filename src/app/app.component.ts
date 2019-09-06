import { Component, OnInit } from '@angular/core';
import { PostListService } from './post-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: []
})
export class AppComponent implements OnInit {

  constructor(private postListService: PostListService)  {}

  ngOnInit() {
    this.postListService.loadPostList();
  }
}
