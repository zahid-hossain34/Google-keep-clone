import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteDetailsRoutes } from './note-details.routing';
import { NoteDetailsPageComponent } from './pages/note-details-page/note-details-page.component';

const COMPONETS = [
  // pages
  NoteDetailsPageComponent,
  // components
]
@NgModule({
  imports: [
    CommonModule,
    NoteDetailsRoutes
  ],
  declarations: [...COMPONETS]
})
export class NoteDetailsModule { }
