import { Component, OnInit } from '@angular/core';
import { FeedModel, Channel } from '../model/feed';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  currentFeed = new FeedModel();
  constructor() { }

  ngOnInit() {
    this.currentFeed.source = 'https://www.nasa.gov/rss/dyn/lg_image_of_the_day.rss';
    this.currentFeed.channel = {
      title: 'NASA Image of the Day',
      category: '',
      description: 'The latest NASA "Image of the Day" image.',
      items: [],
      language: 'en-us',
      link: 'http://www.nasa.gov/'
    };
  }
}
