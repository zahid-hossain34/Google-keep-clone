import { Routes, RouterModule } from '@angular/router';
import { NoteDetailsPageComponent } from './pages/note-details-page/note-details-page.component';

const routes: Routes = [
  { 
    path: '',
    component: NoteDetailsPageComponent,
   },
];

export const NoteDetailsRoutes = RouterModule.forChild(routes);
