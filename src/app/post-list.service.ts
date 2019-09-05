import { Post } from './post.model';
import { EventEmitter } from '@angular/core';



export class PostListService {

    postListChanged = new EventEmitter<Post[]>();

    private postList: Post[] = [
        new Post(0, 'Post 1', 'This is Post 1', `Sit voluptate nostrud deserunt 
                                              consequat velit enim fugiat sint proident ullamco. Cupidatat aliqua ut ullamco reprehenderit 
                                               anim excepteur enim dolor deserunt eu exercitation. Mollit esse ullamco reprehenderit 
                                                 Lorem reprehenderit velit non consectetur reprehenderit.`, 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'),
        new Post(1, 'Post 2', 'This is Post 2', `Sit voluptate nostrud deserunt 
                                                 consequat velit enim fugiat sint proident ullamco. Cupidatat aliqua ut ullamco reprehenderit 
                                                  anim excepteur enim dolor deserunt eu exercitation. Mollit esse ullamco reprehenderit 
                                                    Lorem reprehenderit velit non consectetur reprehenderit.`, 'https://images.unsplash.com/photo-1504700610630-ac6aba3536d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')                                             
      ];
    
    getPostList(): Post[] {
        return this.postList.slice();
    } 

    getPostById(id: number): Post {
        return this.postList.slice().find((item: Post) => item.id === id)
    }
    
    addPost(newPost: Post) {
        this.postList.push(newPost);
        this.postListChanged.emit(this.postList.slice());
    }

    changePost(changingPost: Post) {

        let itemIndex: number = this.postList.findIndex((item: Post) => item.id === changingPost.id);
        if (itemIndex >= 0) {
            this.postList[itemIndex] = changingPost;
            this.postListChanged.emit(this.postList.slice());
        }
    }

    deletePost(deletingPost: Post) {
        this.postList = this.postList.filter((item: Post) => item.id !== deletingPost.id);
        this.postListChanged.emit(this.postList.slice());
    }
}