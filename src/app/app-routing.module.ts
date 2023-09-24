import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from './@theme/layouts/layouts.component';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: '' },
  {
    path: '',
    component: LayoutsComponent,
    children: [
      { path: '', redirectTo: 'note-list', pathMatch: 'full' },
      {
        path: 'note-list',
        loadChildren: () =>
          import('./@features/note-list/note-list.module').then(
            (m) => m.NoteListModule
          ),
      },
      {
        path: 'note-details',
        loadChildren: () =>
          import('./@features/note-details/note-details.module').then(
            (m) => m.NoteDetailsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
