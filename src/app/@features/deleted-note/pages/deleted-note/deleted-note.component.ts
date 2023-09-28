import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { INotes } from 'src/app/@applications/interfaces/note.interface';
import { NoteState } from 'src/app/@applications/store/note-state/note.state';
import { Observable } from 'rxjs';
import * as NoteActions from '../../../../@applications/store/note-state/note.actions';


@Component({
  selector: 'app-deleted-note',
  templateUrl: './deleted-note.component.html',
  styleUrls: ['./deleted-note.component.css']
})
export class DeletedNoteComponent implements OnInit {
  deletedNotes$: Observable<INotes[]>;

  constructor(private store: Store<{ note: NoteState }>) {
   this.deletedNotes$ =  this.store.select('note', 'deletedNotes');    
   }

  ngOnInit() {
  }
  onEmptyRecycleBin(){
    this.store.dispatch(NoteActions.emptyRecycleBin());
  }

}
