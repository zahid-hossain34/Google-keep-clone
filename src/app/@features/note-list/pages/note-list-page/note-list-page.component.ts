import { AfterViewInit, Component, OnInit } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Store, select } from '@ngrx/store';

import { INotes, NoteState } from 'src/app/@applications/state/note.state';
import * as NoteActions from '../../../../@applications/state/note.actions';
import { Observable, Subject } from 'rxjs';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';
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
  
  
  constructor(
    private store: Store<{ note: NoteState }>,
    private router: Router
    ) {
    this.notes$ = this.store.select('note', 'notes');
    this.notes$.subscribe((notes)=>{
        console.log(notes);
        
    });
    
  }

  ngOnInit() {

  }
 
  onFoucusEditor() {
    this.showTitle = true;
  }
  handleClickAway() {
    this.showTitle = false;
    if (this.title !== '' || this.editorContent !== '') {
      this.store.dispatch(NoteActions.addNewNote({id:uuidv4(), noteTitle:this.title, noteDescription: this.editorContent }));
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

  onTitleChange(title: string) {
    // this.store.dispatch(NoteActions.updateNoteTitle({ noteTitle: title }));
  }
  onDelete(noteId: number) {
    console.log(noteId);
    
    this.store.dispatch(NoteActions.deleteItem({ index:noteId }));
    this.notes$ = this.store.select('note', 'items');
    this.store.select('note').subscribe(updatedState => {
      console.log('Updated State:', updatedState);
    });
  }

  onNoteClick(noteID: any) {
    console.log(noteID);
    this.router.navigate(['/note-details', noteID]);
  }



  drop(event: CdkDragDrop<string[]>) {
    console.log(event);
    
    // moveItemInArray(this.notes$, event.previousIndex, event.currentIndex);
  }


}
