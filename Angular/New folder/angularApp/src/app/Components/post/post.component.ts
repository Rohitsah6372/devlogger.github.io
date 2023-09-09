import { Component, OnInit } from '@angular/core';
import { Post } from '../Schema/Post';
import { PostService } from 'src/app/services/post/post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  post: Post;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    if (id !== null && !isNaN(id)) {
      this.postService.getPost(id).subscribe(
        (post) => {
          this.post = post;
        },
        (error) => {
          console.error('An error occurred:', error);
          // You can also handle the error in a more user-friendly way, like displaying a message to the user.
        }
      );
    } else {
      console.log('id is null or not a number.');
    }
  }
}
