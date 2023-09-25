import { createReducer, on } from "@ngrx/store";
import { NoteState } from "./note.state";
import * as NoteActions from './note.actions';

const initialState: NoteState = {
    notes: []
  }

  
  export const noteReducer = createReducer(
    initialState,
    on(NoteActions.updateNoteDescription, (state, { noteDescription }) => ({ ...state, noteDescription: noteDescription })),
    on(NoteActions.updateNoteTitle, (state, { noteTitle }) => ({ ...state, noteTitle })),
    on(NoteActions.resetNote, state => ({ ...state, noteDescription: '',noteTitle:'' })),
    on(NoteActions.addNewNote, (state, { noteTitle, noteDescription }) => ({ 
        ...state, 
        notes: [...state.notes, { noteTitle, noteDescription }] 
      }))
  );