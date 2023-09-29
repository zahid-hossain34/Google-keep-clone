import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { NoteState } from 'src/app/@applications/store/note-state/note.state';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.css'],
})
export class LayoutsComponent implements OnInit, AfterViewChecked, OnDestroy {
  noteTitle = '';
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;
  isIdAvailable: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private locatin: Location,
    private store: Store<{ note: NoteState }>,
    private cdr: ChangeDetectorRef
  ) {}
  ngOnDestroy(): void {
    this.isIdAvailable = false;
  }

  ngOnInit() {
    
    
  }

  ngAfterViewChecked(): void {
    this.store.select('note', 'selectedNote').subscribe((res) => {
      
      if (res) {
        this.noteTitle = res.noteTitle;
        this.isIdAvailable = res.id ? true : false;
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
