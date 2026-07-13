import { Component, ViewEncapsulation } from '@angular/core';
import { TreeViewItemComponent } from '../tree-view-item/tree-view-item.component';

@Component({
  selector: 'app-tree-view',
  imports: [],
  templateUrl: './tree-view.component.html',
  styleUrl: './tree-view.component.css',
  encapsulation: ViewEncapsulation.Emulated,
  standalone: true
})
export class TreeViewComponent {}
