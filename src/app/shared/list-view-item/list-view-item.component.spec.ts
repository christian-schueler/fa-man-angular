import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListViewItemComponent } from './list-view-item.component';

describe('ListViewItemComponent', () => {
  let component: ListViewItemComponent;
  let fixture: ComponentFixture<ListViewItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListViewItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListViewItemComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
