import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeViewItemComponent } from './tree-view-item.component';

describe('TreeViewItemComponent', () => {
  let component: TreeViewItemComponent;
  let fixture: ComponentFixture<TreeViewItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreeViewItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TreeViewItemComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
