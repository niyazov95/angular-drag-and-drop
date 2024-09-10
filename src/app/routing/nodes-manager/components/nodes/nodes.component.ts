import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CdkTreeModule } from '@angular/cdk/tree';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { ComplexDataStore, TransformedData } from '../../utils/node-factory';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { AsyncPipe } from '@angular/common';
import {
  CdkDrag,
  CdkDragDrop, CdkDragPlaceholder,
  CdkDropList,
  moveItemInArray,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-nodes',
  standalone: true,
  imports: [
    CdkTreeModule,
    MatIconButton,
    MatIcon,
    MatProgressSpinner,
    AsyncPipe,
    CdkDropList,
    CdkDrag,
    CdkDragPlaceholder,
  ],
  templateUrl: './nodes.component.html',
  styleUrl: './nodes.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NodesComponent implements OnInit {
  private readonly _dataStore = new ComplexDataStore();

  areRootsLoading = this._dataStore.areRootsLoading;
  roots = this._dataStore.roots;

  getChildren = (node: TransformedData) =>
    this._dataStore.getChildren(node.raw.id);
  trackBy = (index: number, node: TransformedData) => this.expansionKey(node);
  expansionKey = (node: TransformedData) => node.raw.id;

  ngOnInit() {
    this._dataStore.loadRoots();
  }

  onExpand(node: TransformedData, expanded: boolean) {
    if (expanded) {
      // Only perform a load on expansion.
      this._dataStore.loadChildren(node.raw.id);
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    console.log(event);
    // moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }
}
