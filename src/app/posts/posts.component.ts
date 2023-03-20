import { Component, OnInit } from '@angular/core';
import {PostService} from "../services/post.service";
interface IPost {
  id: number
  title: string
  content: string
}
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: Array<IPost> = []

  isActive: boolean = true
  constructor(private postService: PostService) {
    this.posts = postService.postlist
  }

  handleAddPost() : void {
    let post : IPost = {
      id : 1,
      title : "title 2",
      content: "content"
    }
    this.postService.addPost(post)
  }
  ngOnInit(): void {
  }

  handleDeletePost(index: number) : void {
    this.postService.deletePost(index)
  }
}
