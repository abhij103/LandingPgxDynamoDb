import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private router:Router) { }

  ngOnInit(): void {
   
  }
  changePage(route:string){
    this.router.navigate([route]);
  }
}
