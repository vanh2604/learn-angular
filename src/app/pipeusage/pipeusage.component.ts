import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipeusage',
  templateUrl: './pipeusage.component.html',
  styleUrls: ['./pipeusage.component.scss']
})
export class PipeusageComponent implements OnInit {

  data : string = "this is title this is titlethis is title this is title this is title this is title this is title"
  constructor() { }

  ngOnInit(): void {
  }

}
