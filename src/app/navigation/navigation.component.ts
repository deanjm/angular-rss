import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FeedModel, Channel } from '../model/feed';
import { DataService } from '../data.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, AfterViewInit {
  feeds: FeedModel[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    this.dataService.getFeedFromSource('https://www.nasa.gov/rss/dyn/lg_image_of_the_day.rss')
      .subscribe(feeds => this.feeds = feeds);
  }
}
