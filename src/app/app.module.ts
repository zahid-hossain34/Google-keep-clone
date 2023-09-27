import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemeModule } from './@theme/theme.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ClickAwayListenerDirective } from './@applications/directives/click-away-listener.directive';
import { StoreModule } from '@ngrx/store';
import { noteReducer } from './@applications/store/note-state/note.reducer';
import { metaReducers } from './@applications/store/store';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ThemeModule,
    BrowserAnimationsModule,
    CKEditorModule,
    StoreModule.forRoot({ note: noteReducer },{metaReducers})
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
