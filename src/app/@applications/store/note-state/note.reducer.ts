import { createReducer, on } from "@ngrx/store";
import { NoteState } from "./note.state";
import * as NoteActions from './note.actions';
import { INotes } from 'src/app/@applications/interfaces/note.interface';

const initialState: NoteState = {
    notes: [],
    deletedNotes: [],
    selectedNote: null 
   
  }

  
  export const noteReducer = createReducer(
    initialState,
    on(NoteActions.addNewNote, (state, action) => ({
    ...state,
    notes: [...state.notes, action]
  })),

  on(NoteActions.updateNote, (state, action) => ({
    ...state,
    notes: state.notes.map(note =>
      note.id === action.id ? { ...note, ...action.note } : note
    )
  })),

  on(NoteActions.deleteNote, (state, action) => {
    const index = state.notes.findIndex(note => note.id === action.id);
      const deletedNote = state.notes[index];
      return {
        ...state,
        notes: state.notes.filter(note => note.id !== action.id),
        deletedNotes: [...state.deletedNotes, deletedNote],
      };
  }),

  on(NoteActions.getNoteById, (state, action) => {
    const note = state.notes.find(note => note.id === action.id);
    return {
      ...state,
      selectedNote: note || null 
    };
  }),
  on(NoteActions.getDeletedNotes, state => ({
    ...state,
    deletedNotes: state.deletedNotes
    })),
  
  on(NoteActions.emptyRecycleBin, state => ({
    ...state,
    deletedNotes: []
  })),

);





    