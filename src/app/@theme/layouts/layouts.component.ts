import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  ActivatedRoute,
  ChildrenOutletContexts,
  NavigationEnd,
  Router,
} from '@angular/router';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { NoteState } from 'src/app/@applications/store/note-state/note.state';
import { filter } from 'rxjs';
import * as NoteActions from '../../@applications/store/note-state/note.actions';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.css'],
})
export class LayoutsComponent implements OnInit, AfterViewChecked {
  id: string = '';
  noteTitle = '';
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;
  isIdAvailable: boolean = false;

  constructor(
    private locatin: Location,
    private store: Store<{ note: NoteState }>,
    private cdr: ChangeDetectorRef,
    private contexts: ChildrenOutletContexts
  ) {}

  ngOnInit() {}
  
  getNoteTitle() {
    this.contexts.getContext('primary')?.route?.params.subscribe((res) => {
      this.id = String(res['id']);
    });
  }

  ngAfterViewChecked(): void {
    this.getNoteTitle();
    this.store.dispatch(NoteActions.getNoteById({ id: this.id }));
    this.store.select('note', 'selectedNote').subscribe((res) => {
      if (res) {
        this.noteTitle = res.noteTitle;
        this.isIdAvailable = res.id ? true : false;
      } else {
        this.isIdAvailable = false;
      }
    });

    this.cdr.detectChanges();
  }
  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }
  onBack() {
    this.locatin.back();
  }
}
