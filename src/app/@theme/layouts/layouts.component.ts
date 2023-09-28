import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.css']
})
export class LayoutsComponent implements OnInit {
  id:string= '';
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;
  isIdAvailable:boolean = false;

  constructor(
    private activatedRoute:ActivatedRoute,
    private locatin:Location
    )
  {

   }

  ngOnInit() {
    this.activatedRoute.paramMap.pipe().subscribe((res) => {
      this.id = String(res.get('id'));
      console.log(this.id);
      console.log(res.get('id'));
      this.isIdAvailable = res.get('id') ? true : false;
      console.log(this.isIdAvailable);
      
    });
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
  onBack(){
    this.locatin.back();
  }

}
