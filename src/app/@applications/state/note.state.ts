export interface NoteState {
  
    notes: INotes[]
    items: INotes[]
  }
  export interface INotes{
    id?:string
    noteTitle: string,
    noteDescription: string
  }