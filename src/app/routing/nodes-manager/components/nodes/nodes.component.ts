import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { DndDropEvent, DndModule, DropEffect } from 'ngx-drag-drop';
import { JsonPipe, NgTemplateOutlet } from '@angular/common';
import { IDraggableItem, NESTED_DATA } from '../../models/node.model';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-nodes',
  standalone: true,
  imports: [MatListModule, DndModule, NgTemplateOutlet, JsonPipe, MatIcon],
  templateUrl: './nodes.component.html',
  styleUrl: './nodes.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NodesComponent {
  draggableList: IDraggableItem[] = NESTED_DATA;

  onDragged(item: any, list: any[], effect: DropEffect) {
    if (effect === 'move') {
      const index = list.indexOf(item);
      list.splice(index, 1);
    }
  }

  onDrop(event: DndDropEvent, list?: any[]) {
    if (list && (event.dropEffect === 'copy' || event.dropEffect === 'move')) {
      let index = event.index;

      if (typeof index === 'undefined') {
        index = list.length;
      }

      list.splice(index, 0, event.data);
    }
  }
}
