import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { DndDropEvent, DndModule, DropEffect } from 'ngx-drag-drop';
import { NgTemplateOutlet } from '@angular/common';
import {
  generateFiles,
  generateFolders,
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
  selectedItems: IDraggableItem[] = [];
  selectedItem!: IDraggableItem | null;

  draggableList: IDraggableItem[] = generateFolders();

  isSelected(item: IDraggableItem) {
    if (this.selectedItems.length) {
      return this.selectedItems.includes(item);
    } else {
      return item === this.selectedItem;
    }
  }

  onSelect(event: MouseEvent, item: IDraggableItem) {
    if (event.shiftKey) {
      this.selectedItems.push(item);
    } else {
      this.selectedItems = [];
      this.selectedItem = item;
    }
  }

  onDragged(item: any, list: any[], effect: DropEffect) {
    if (effect === 'move') {
      if (this.selectedItems.length) {
        this.selectedItems.forEach((selected) => {
          const index = list.indexOf(selected);
          list.splice(index, 1);
          console.log(list);
        });
      } else {
        const index = list.indexOf(item);
        list.splice(index, 1);
      }
    }
  }

  onDrop(event: DndDropEvent, list?: any[]) {
    if (list && (event.dropEffect === 'copy' || event.dropEffect === 'move')) {
      let index = event.index;

      if (typeof index === 'undefined') {
        index = list.length;
      }

      if (this.selectedItems.length) {
        this.selectedItems.forEach((data) => {
          list.splice(index, 0, data);
        });
      } else {
        list.splice(index, 0, event.data);
      }
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
