import { Action, ActionReducer, MetaReducer } from '@ngrx/store';

export function hydrationMetaReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return (state, action) => {
    const rehydratedState = localStorage.getItem('noteState');
    if (rehydratedState) {
      state = JSON.parse(rehydratedState);
    }

    const nextState = reducer(state, action);

    if (action.type === '[Note] Add New Data' || action.type === '[Note] Update Note' || action.type === '[Note] Delete Item') {
      localStorage.setItem('noteState', JSON.stringify(nextState));
    }

    return nextState;
  };
}
