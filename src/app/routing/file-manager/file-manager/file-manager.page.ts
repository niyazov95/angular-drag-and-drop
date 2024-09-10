import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-file-manager',
  standalone: true,
  imports: [],
  templateUrl: './file-manager.page.html',
  styleUrl: './file-manager.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileManagerPage {}
