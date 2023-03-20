import { Component, OnInit } from '@angular/core';
import {PostService} from "../services/post.service";

@Component({
  selector: 'app-postnumber',
  templateUrl: './postnumber.component.html',
  styleUrls: ['./postnumber.component.scss']
})
export class PostnumberComponent implements OnInit {

  posts: Array<any> = []
  constructor(private postService: PostService) {
    this.posts = postService.postlist
  }

  ngOnInit(): void {
  }

}
