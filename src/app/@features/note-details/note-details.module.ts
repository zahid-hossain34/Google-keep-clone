import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteDetailsRoutes } from './note-details.routing';
import { NoteDetailsPageComponent } from './pages/note-details-page/note-details-page.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FormsModule } from '@angular/forms';

const COMPONETS = [
  // pages
  NoteDetailsPageComponent,
  // components
]
@NgModule({
  imports: [
    CommonModule,
    NoteDetailsRoutes,
    CKEditorModule,
    FormsModule
  ],
  declarations: [...COMPONETS]
})
export class NoteDetailsModule { }
