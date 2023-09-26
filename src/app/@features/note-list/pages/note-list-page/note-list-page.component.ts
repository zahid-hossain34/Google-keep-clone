import { AfterViewInit, Component, OnInit } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Store } from '@ngrx/store';

import { INotes, NoteState } from 'src/app/@applications/state/note.state';
import * as NoteActions from '../../../../@applications/state/note.actions';
import { Observable, Subject } from 'rxjs';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

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
  retrievedData: string = '';
  notes$: Observable<INotes[]>;
  
  
  constructor(private store: Store<{ note: NoteState }>) {
    this.notes$ = this.store.select('note', 'notes');
  }

  ngOnInit() {

  }
 
  onFoucusEditor() {
    this.showTitle = true;
  }
  handleClickAway() {
    this.showTitle = false;
    if (this.title !== '' || this.editorContent !== '') {
      this.store.dispatch(NoteActions.addNewNote({ noteTitle:this.title, noteDescription: this.editorContent }));
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

  handleTitleChange(title: string) {
    // this.store.dispatch(NoteActions.updateNoteTitle({ noteTitle: title }));
  }


  drop(event: CdkDragDrop<string[]>) {
    // moveItemInArray(this.notes$, event.previousIndex, event.currentIndex);
  }
}
