import { Component, OnInit, ElementRef, ViewChild, Input, Renderer2, AfterViewInit } from '@angular/core';
import { PostListService } from './../post-list.service';
import { Post } from './../post.model';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-post-add-edit',
  templateUrl: './post-add-edit.component.html',
  styleUrls: ['./post-add-edit.component.scss']
})
export class PostAddEditComponent implements OnInit, AfterViewInit {

  private isEdit: boolean = false;
  private postItem: Post;
  confirmAction: string = 'Add';

  @ViewChild('titleInput', {static: false}) titleInputRef: ElementRef;
  @ViewChild('descriptionInput', {static: false}) descriptionInputRef: ElementRef;
  @ViewChild('imgPathInput', {static: false}) imgPathInputRef: ElementRef;
  @ViewChild('imgPreview', {static: false}) imgPreviewRef: ElementRef;
  @ViewChild('articleInput', {static: false}) articleInputRef: ElementRef;

  constructor(private postListService: PostListService, 
              private renderer: Renderer2, 
              private route: ActivatedRoute, 
              private router: Router) { }

  private setFormValues(title: string, descr: string, article: string, imgPath: string) {
    this.renderer.setProperty(this.titleInputRef.nativeElement, 'value', title);
    this.renderer.setProperty(this.descriptionInputRef.nativeElement, 'value', descr);
    this.renderer.setProperty(this.articleInputRef.nativeElement, 'value', article);
    this.renderer.setProperty(this.imgPathInputRef.nativeElement, 'value', imgPath);
  }

  ngOnInit() {
     this.route.params.subscribe((params: Params) => {
       this.isEdit = params.action === 'edit';
       this.confirmAction = this.isEdit === true ? 'Edit' : 'Add';
    })    
    this.postItem = window.history.state.post;
  }

  ngAfterViewInit() {
    if (this.isEdit && this.postItem) {
      this.setFormValues(this.postItem.title, this.postItem.description, this.postItem.article, this.postItem.imgPath)
    }
  }

  onConfirmClick() {
    if (this.isEdit && this.postItem) {
      this.postListService.changePost(new Post(this.postItem.id, this.titleInputRef.nativeElement.value, 
                                              this.descriptionInputRef.nativeElement.value,
                                              this.articleInputRef.nativeElement.value,
                                              this.imgPathInputRef.nativeElement.value))
    } else {
      this.postListService.addPost(new Post(0, this.titleInputRef.nativeElement.value, 
                                              this.descriptionInputRef.nativeElement.value,
                                              this.articleInputRef.nativeElement.value,
                                              this.imgPathInputRef.nativeElement.value));
    }

    this.router.navigate(['/']);
  }

  onClearClick() {
    this.setFormValues('', '', '', '');
  }

  

}
