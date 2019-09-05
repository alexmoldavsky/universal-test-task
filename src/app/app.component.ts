import { Component } from '@angular/core';
import { PostListService } from './post-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [PostListService]
})
export class AppComponent {
}
