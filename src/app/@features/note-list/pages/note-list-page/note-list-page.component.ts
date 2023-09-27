import { AfterViewInit, Component, OnInit } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Store, select } from '@ngrx/store';

import { NoteState } from 'src/app/@applications/store/note-state/note.state';
import * as NoteActions from '../../../../@applications/store/note-state/note.actions';
import { Observable, Subject } from 'rxjs';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';
import { INotes } from 'src/app/@applications/interfaces/note.interface';
import { Utils } from 'src/app/@applications/utils/utils';
@Component({
  selector: 'app-note-list-page',
  templateUrl: './note-list-page.component.html',
  styleUrls: ['./note-list-page.component.css'],
})
export class NoteListPageComponent implements OnInit {
  public Editor = ClassicEditor;
  showTitle = false;
  title: string = '';
  editorContent: string = '';
  notes$: Observable<INotes[]>;

  constructor(
    private store: Store<{ note: NoteState }>,
    private router: Router
  ) {
    this.notes$ = this.store.select('note', 'notes');
  }
  ngOnInit() {}

  onFoucusEditor() {
    this.showTitle = true;
  }
  onClickAway() {
    this.showTitle = false;
    if (this.title !== '' || this.editorContent !== '') {
      this.store.dispatch(
        NoteActions.addNewNote({
          id: Utils.generateUniqId(),
          noteTitle: this.title,
          noteDescription: this.editorContent,
        })
      );
    }
    this.title = '';
    this.editorContent = '';
  }

  editorConfig = {
    toolbar: [],
  };

  onEditorChange(event: any) {
    this.editorContent = event.editor.getData();
  }

  onDelete(noteId: any) {
    this.store.dispatch(NoteActions.deleteNote({ id: noteId }));
  }

  onNoteClick(noteID: any) {
    this.router.navigate(['/note-details', noteID]);
  }

  drop(event: CdkDragDrop<string[]>) {
    console.log(event);

    // moveItemInArray(this.notes$, event.previousIndex, event.currentIndex);
  }
}
