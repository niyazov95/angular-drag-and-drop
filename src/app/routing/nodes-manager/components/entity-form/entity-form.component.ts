import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-entity-form',
  standalone: true,
  imports: [],
  templateUrl: './entity-form.component.html',
  styleUrl: './entity-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EntityFormComponent {

}
