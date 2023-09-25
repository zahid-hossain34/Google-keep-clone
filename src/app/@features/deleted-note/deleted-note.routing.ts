import { Routes, RouterModule } from '@angular/router';
import { DeletedNoteComponent } from './pages/deleted-note/deleted-note.component';

const routes: Routes = [
  { 
    path: '',
    component: DeletedNoteComponent,
   },
];

export const DeletedNoteRoutes = RouterModule.forChild(routes);
