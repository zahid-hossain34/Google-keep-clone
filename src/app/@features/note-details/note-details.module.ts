import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { NoteDetailsRoutes } from './note-details.routing';
import { NoteDetailsPageComponent } from './pages/note-details-page/note-details-page.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


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
    FormsModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [...COMPONETS]
})
export class NoteDetailsModule { }
