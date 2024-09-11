import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { DndDropEvent, DndModule, DropEffect } from 'ngx-drag-drop';
import { NgTemplateOutlet } from '@angular/common';
import {
  generateFiles,
  generateFolders,
  generateUUID,
  IDraggableItem,
} from '../../models/node.model';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-nodes',
  standalone: true,
  imports: [
    MatListModule,
    DndModule,
    NgTemplateOutlet,
    MatIcon,
    MatButton,
    FormsModule,
    MatFormField,
    MatInput,
    MatLabel,
  ],
  templateUrl: './nodes.component.html',
  styleUrl: './nodes.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NodesComponent {
  selectedItem!: IDraggableItem | null;
  shiftPressed = false;

  draggableList: IDraggableItem[] = generateFolders();

  isSelected(item: IDraggableItem) {
    return item === this.selectedItem;
  }

  onSelect(event: MouseEvent, item: IDraggableItem) {
    this.selectedItem = item;
  }

  onDragged(item: any, list: any[], effect: DropEffect) {
    if (this.shiftPressed) {
      return;
    }
    if (effect === 'move') {
      const index = list.indexOf(item);
      list.splice(index, 1);
    }
  }

  onDrop(event: DndDropEvent, list?: any[]) {
    this.shiftPressed = event.event.shiftKey;

    if (list && (event.dropEffect === 'copy' || event.dropEffect === 'move')) {
      let index = event.index;

      if (typeof index === 'undefined') {
        index = list.length;
      }

      if (this.shiftPressed) {
        event.data.id = generateUUID();
      }

      list.splice(index, 0, event.data);
    }

    this.selectedItem = null;
  }

  addFolders() {
    const targetList = this.selectedItem?.children ?? this.draggableList;
    const startFrom = targetList?.length ?? 0;

    if (this.selectedItem) {
      this.selectedItem.children?.push(...generateFolders(5, startFrom));
    } else {
      this.draggableList.push(...generateFolders(5, startFrom));
    }
  }

  addFiles() {
    const targetList = this.selectedItem?.children ?? this.draggableList;
    const startFrom = targetList?.length ?? 0;

    if (this.selectedItem) {
      this.selectedItem.children?.push(...generateFiles(5, startFrom));
    } else {
      this.draggableList.push(...generateFiles(5, startFrom));
    }
  }
}
