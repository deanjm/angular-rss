import { Component, OnInit, Input } from '@angular/core';
import { FeedModel } from '../model/feed';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  @Input() feed;
  constructor() { }

  ngOnInit() {
  }

}
