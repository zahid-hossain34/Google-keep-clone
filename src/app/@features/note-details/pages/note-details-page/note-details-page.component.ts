import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import * as NoteActions from '../../../../@applications/store/note-state/note.actions';

import { NoteState } from 'src/app/@applications/store/note-state/note.state';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-note-details-page',
  templateUrl: './note-details-page.component.html',
  styleUrls: ['./note-details-page.component.css'],
})
export class NoteDetailsPageComponent implements OnInit {
  public Editor = ClassicEditor;
  id:string = '';
  editorContent = '';
  title: string = '';


  constructor(
    private store: Store<{ note: NoteState }>,
    private activatedRoute: ActivatedRoute
  ) {

    this.store.select('note', 'selectedNote').subscribe((res) => {
      if(res){
        this.title = res.noteTitle;
        this.editorContent = res.noteDescription;
      }
    });
  }

  ngOnInit() {
    this.activatedRoute.paramMap.pipe().subscribe((res) => {
      this.id = String(res.get('id'));
    });
    if(this.id){
      this.store.dispatch(NoteActions.getNoteById({id:this.id}));
    }
  }
  
  editorConfig = {
    toolbar: [],
  };

  onEditorChange(event: any) {
    this.editorContent = event.editor.getData();
    this.store.dispatch(NoteActions.updateNote({
      id:this.id,
      note:{
        noteTitle:this.title,
        noteDescription:this.editorContent
      }
    }));
  }
  onTitleChange(updateTitle:string){ 
    this.title = updateTitle;
    this.store.dispatch(NoteActions.updateNote({
      id:this.id,
      note:{
        noteTitle:this.title,
        noteDescription:this.editorContent
      }
    }));
  }

}
