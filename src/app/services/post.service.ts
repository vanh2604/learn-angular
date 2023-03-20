import { Injectable } from '@angular/core';
import {core} from "@angular/compiler";

interface IPost {
  id: number
  title: string
  content: string
}
@Injectable({
  providedIn: 'root'
})
export class PostService {

  postlist : Array<IPost> = [
    {
      id: 1,
      title: "post1",
      content: "this is post 1"
    },
    {
      id:2,
      title: "post2",
      content: "this is post 2"
    },
    {
      id:3,
      title: "post3",
      content: "this is post 3"
    }
  ]

  addPost(data : IPost) : void {
    this.postlist.push(data)
  }

  deletePost(index: number) : void {
    this.postlist.splice(index,1)
  }

  constructor() { }
}
