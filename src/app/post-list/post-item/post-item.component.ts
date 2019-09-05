import { Component, OnInit, Input } from '@angular/core';
import { Post } from './../../post.model';
import { PostListService } from './../../post-list.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {

  @Input() postItem: Post;

  constructor(private postListService: PostListService, private router: Router) { }

  ngOnInit() {
  }

  onDeleteClick(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.postListService.deletePost(this.postItem);
  }

  onEditClick(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.router.navigate(['/post', this.postItem.id, 'edit'], {state: {post: this.postItem}});
    
  }

}
