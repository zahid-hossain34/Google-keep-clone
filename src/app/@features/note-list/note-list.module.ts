import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteListRoutes } from './note-list.routing';
import { NoteListPageComponent } from './pages/note-list-page/note-list-page.component';

const COMPONETS = [
  // pages
  NoteListPageComponent,
  // components
]
@NgModule({
  imports: [
    CommonModule,
    NoteListRoutes
  ],
  declarations: [...COMPONETS]
})
export class NoteListModule { }
