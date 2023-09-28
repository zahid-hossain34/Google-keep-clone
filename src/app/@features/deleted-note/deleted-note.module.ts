import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeletedNoteRoutes } from './deleted-note.routing';
import { DeletedNoteComponent } from './pages/deleted-note/deleted-note.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
const COMPONENTS = [
  // pages
  DeletedNoteComponent
];
@NgModule({
  imports: [
    CommonModule,
    DeletedNoteRoutes,
    MatGridListModule,
    MatIconModule,
  ],
  declarations: [...COMPONENTS]
})
export class DeletedNoteModule { }
