import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComicDetailPage } from './comic-detail.page';

describe('ComicDetailPage', () => {
  let component: ComicDetailPage;
  let fixture: ComponentFixture<ComicDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
