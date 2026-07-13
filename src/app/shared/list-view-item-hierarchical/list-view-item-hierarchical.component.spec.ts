import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListViewItemHierarchicalComponent } from './list-view-item-hierarchical.component';

describe('ListViewItemHierarchicalComponent', () => {
  let component: ListViewItemHierarchicalComponent;
  let fixture: ComponentFixture<ListViewItemHierarchicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListViewItemHierarchicalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListViewItemHierarchicalComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
