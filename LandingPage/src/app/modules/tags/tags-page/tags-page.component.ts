import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tags-page',
  templateUrl: './tags-page.component.html',
  styleUrls: ['./tags-page.component.scss']
})
export class TagsPageComponent implements OnInit {
  arr =new Array(15);
  @ViewChild('parent') parent!: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
 move(m:string){
  // this.parent.nativeElement.scrollLeft += m;
  if(m === '20'){
    this.parent.nativeElement.scrollLeft += 20;
  }else{
    this.parent.nativeElement.scrollLeft -= 20;
  }
 }
}
