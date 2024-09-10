import { ChangeDetectionStrategy, Component } from '@angular/core';
import {NodesComponent} from "../../components/nodes/nodes.component";
import {EntityFormComponent} from "../../components/entity-form/entity-form.component";

@Component({
  selector: 'app-nodes-manager',
  standalone: true,
  imports: [NodesComponent, EntityFormComponent],
  templateUrl: './nodes-manager.component.html',
  styleUrl: './nodes-manager.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NodesManagerComponent {}
