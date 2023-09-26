import { createReducer, on } from "@ngrx/store";
import { NoteState } from "./note.state";
import * as NoteActions from './note.actions';

const initialState: NoteState = {
    notes: [],
    items: []
  }

  
  export const noteReducer = createReducer(
    initialState,
    on(NoteActions.updateNoteDescription, (state, { noteDescription }) => ({ ...state, noteDescription: noteDescription })),
    on(NoteActions.updateNoteTitle, (state, { noteTitle }) => ({ ...state, noteTitle })),
    on(NoteActions.resetNote, state => ({ ...state, noteDescription: '',noteTitle:'' })),
    on(NoteActions.addNewNote, (state, { id,noteTitle, noteDescription }) => ({ 
        ...state, 
        notes: [...state.notes, { id,noteTitle, noteDescription }] 
      })),
      on(NoteActions.deleteItem, (state, { index }) => {
        const updatedItems =  [...state.notes.slice(0, index), ...state.items.slice(index + 1)] ;
        console.log(updatedItems);
        
        return {
          ...state,
          items: updatedItems
        };
      })
  );