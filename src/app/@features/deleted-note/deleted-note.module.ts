import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeletedNoteRoutes } from './deleted-note.routing';
import { DeletedNoteComponent } from './pages/deleted-note/deleted-note.component';
const COMPONENTS = [
  // pages
  DeletedNoteComponent
];
@NgModule({
  imports: [
    CommonModule,
    DeletedNoteRoutes
  ],
  declarations: [...COMPONENTS]
})
export class DeletedNoteModule { }
