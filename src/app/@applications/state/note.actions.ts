import { createAction, props } from '@ngrx/store';
import {  NoteState } from './note.state';
import { INotes, IUpdateNote } from '../interfaces/note.interface';

export const addNewNote = createAction(
  '[Note] Add New Data',
  props<INotes>()
);

export const updateNote = createAction(
  '[Note] Update Note',
  props<{id:string,note:Partial<IUpdateNote>}>()
);

export const deleteNote = createAction(
  '[Note] Delete Item',
  props<{ index: number }>()
);

export const getNoteById = createAction(
  '[Note] Get Note By Id',
  props<{id:string}>()
);

export const setNote = createAction(
  '[Note] Set Note',
  props<{ note: INotes }>()
);

export const resetNote = createAction('[Note] Reset Content');

export const updateNoteDescription = createAction(
  '[Note] Update Note Description',
  props<{ noteDescription: string }>()
);

export const updateNoteTitle = createAction(
  '[Note] Update Note Title',
  props<{ noteTitle: string }>()
);

