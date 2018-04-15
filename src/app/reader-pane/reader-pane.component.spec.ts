import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaderPaneComponent } from './reader-pane.component';

describe('ReaderPaneComponent', () => {
  let component: ReaderPaneComponent;
  let fixture: ComponentFixture<ReaderPaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReaderPaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReaderPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
