import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NoteListRoutes } from './note-list.routing';
import { NoteListPageComponent } from './pages/note-list-page/note-list-page.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ClickAwayListenerDirective } from 'src/app/@applications/directives/click-away-listener.directive';

import {MatInputModule} from '@angular/material/input';
import {DragDropModule,CdkDrag, CdkDropList, moveItemInArray} from '@angular/cdk/drag-drop';
import {MatGridListModule} from '@angular/material/grid-list';

const COMPONETS = [
  // pages
  NoteListPageComponent,
  // components
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NoteListRoutes,
    CKEditorModule,
    MatInputModule,
    DragDropModule,
    MatGridListModule
  ],
  declarations: [...COMPONETS,
    ClickAwayListenerDirective
  ]
})
export class NoteListModule { }
