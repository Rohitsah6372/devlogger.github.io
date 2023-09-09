import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PostService } from 'src/app/services/post/post.service';
import { Post } from '../Schema/Post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent implements OnInit {
  @Output() newPost: EventEmitter<Post> = new EventEmitter();
  @Output() updatedPost: EventEmitter<Post> = new EventEmitter();
  @Input() currentPost: Post;
  @Input() isEdit: boolean;

  constructor(private postService: PostService) {}

  ngOnInit(): void {}

  addPost(title: any, body: any) {
    if (!title || !body) {
      alert('Please and Post');
    } else {
      this.postService.savePost({ title, body } as Post).subscribe((post) => {
        this.newPost.emit(post);
      });
    }
  }

  updatePost(title: any, body: any) {
    this.postService
      .updatePost(this.currentPost)
      .subscribe(post => {
      console.log(post)
    this.isEdit = false;
    this.updatedPost.emit(post)
  })
  
}
}
