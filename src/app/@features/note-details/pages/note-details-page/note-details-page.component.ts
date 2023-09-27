import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import * as NoteActions from '../../../../@applications/store/note-state/note.actions';

import { NoteState } from 'src/app/@applications/store/note-state/note.state';

@Component({
  selector: 'app-note-details-page',
  templateUrl: './note-details-page.component.html',
  styleUrls: ['./note-details-page.component.css'],
})
export class NoteDetailsPageComponent implements OnInit {
  id:string = '';
  constructor(
    private store: Store<{ note: NoteState }>,
    private activatedRoute: ActivatedRoute
  ) {

    this.store.select('note', 'selectedNote').subscribe((res) => {
      console.log(res);
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
}
