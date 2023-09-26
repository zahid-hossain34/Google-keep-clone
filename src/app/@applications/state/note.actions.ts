import { createAction, props } from '@ngrx/store';
import { INotes, NoteState } from './note.state';

export const updateNoteDescription = createAction(
  '[Note] Update Note Description',
  props<{ noteDescription: string }>()
);
export const updateNoteTitle = createAction(
  '[Note] Update Note Title',
  props<{ noteTitle: string }>()
);
export const resetNote = createAction('[Editor] Reset Content');

export const addNewNote = createAction(
  '[Editor] Add New Data',
  props<INotes>()
);
export const deleteItem = createAction(
  '[Item] Delete Item',
  props<{ index: number }>()
);
