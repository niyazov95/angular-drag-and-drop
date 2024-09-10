import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'node-manager',
    loadChildren: () =>
      import('./routing/nodes-manager/nodes-manager.routing').then(
        (m) => m.nodesManagerRouting,
      ),
  },
];
