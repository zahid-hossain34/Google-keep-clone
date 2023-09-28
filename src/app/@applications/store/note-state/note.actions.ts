import { createAction, props } from '@ngrx/store';
import { INotes, IUpdateNote } from '../../interfaces/note.interface';

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
  props<{ id: string }>()
);

export const getNoteById = createAction(
  '[Note] Get Note By Id',
  props<{id:string}>()
);

export const setNote = createAction(
  '[Note] Set Note',
  props<{ note: INotes }>()
);
export const getDeletedNotes = createAction(
  '[Note] Get Deleted Notes'
);

export const emptyRecycleBin = createAction('[Note] Empty Bin');



