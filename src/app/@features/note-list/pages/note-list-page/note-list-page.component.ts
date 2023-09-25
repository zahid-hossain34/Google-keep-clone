import { Component, OnInit } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Store } from '@ngrx/store';

import { NoteState } from 'src/app/@applications/state/note.state';
import * as NoteActions from '../../../../@applications/state/note.actions';
import { Observable } from 'rxjs';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-note-list-page',
  templateUrl: './note-list-page.component.html',
  styleUrls: ['./note-list-page.component.css'],
})
export class NoteListPageComponent implements OnInit {
  public Editor = ClassicEditor;
  public myContent = ``;
  showTitle = false;
  title: string = '';
  notes$: Observable<{ noteTitle: string, noteDescription: string }[]>;
  constructor(private store: Store<{ note: NoteState }>) {
    this.notes$ = this.store.select('note', 'notes');
    console.log(this.notes$);
    
  }

  ngOnInit() {
    console.log(this.Editor);
    // want to retirive data from this ck editor
    // this.Editor.getData();
  }
  onFoucusEditor() {
    this.showTitle = true;
  }
  handleClickAway() {
    this.showTitle = false;
    // this.store.dispatch(
    //   NoteActions.updateNoteDescription({ noteDescription: this.editorContent })
    // );
    // this.store.dispatch(NoteActions.updateNoteTitle({ noteTitle: this.title }));
    if (this.title !== '' || this.editorContent !== '') {
      this.store.dispatch(NoteActions.addNewNote({ noteTitle:this.title, noteDescription: this.editorContent }));
    }
    this.title = '';
    this.editorContent = '';
  
  }

  editorConfig = {
    // Add any CKEditor configuration here
    // toolbarLocation: 'bottom',
    toolbar: [],
  };
  editorContent: string = '';
  retrievedData: string = '';
  getData() {
    this.retrievedData = this.editorContent;
  }
  onEditorChange(event: any) {
    this.editorContent = event.editor.getData();
    this.saveData(); // Trigger save operation
  }
  saveData() {
    // Implement your save logic here
    console.log('Content saved:', this.editorContent);
    this.getData();
  }
  handleTitleChange(title: string) {
    // this.store.dispatch(NoteActions.updateNoteTitle({ noteTitle: title }));
  }
  // addNewData() {
   
  //   this.store.dispatch(
  //     NoteActions.addNewNote({
  //       noteTitle: this.title,
  //       noteDescription: this.editorContent,
  //     })
  //   );
  // }
  timePeriods = [
    'Bronze age',
    'Iron age',
    'Middle ages',
    'Early modern period',
    'Long nineteenth century',
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.timePeriods, event.previousIndex, event.currentIndex);
  }
}
