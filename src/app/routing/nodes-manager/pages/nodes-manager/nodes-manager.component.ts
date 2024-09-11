import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NodesComponent } from '../../components/nodes/nodes.component';

@Component({
  selector: 'app-nodes-manager',
  standalone: true,
  imports: [NodesComponent],
  templateUrl: './nodes-manager.component.html',
  styleUrl: './nodes-manager.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NodesManagerComponent {}
