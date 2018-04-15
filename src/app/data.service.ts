import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { FeedModel, ChannelItem } from './model/feed';

@Injectable()
export class DataService {

  constructor() {}

  getFeedFromSource(sourceUrl: string): Observable<FeedModel[]> {
    return of([{
      source: sourceUrl,
      channel: {
        title: 'NASA Image of the Day',
        category: '',
        description: 'The latest NASA "Image of the Day" image.',
        items: [],
        language: 'en-us',
        link: 'http://www.nasa.gov/'
      }
    }]);
  }
}
