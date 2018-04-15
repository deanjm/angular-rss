import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedComponent } from './feed.component';
import { Channel } from '../model/feed';

describe('FeedComponent', () => {
  let component: FeedComponent;
  let fixture: ComponentFixture<FeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedComponent);
    component = fixture.componentInstance;

    component.feed = {
      source: 'https://www.test.com',
      channel: new Channel()
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
