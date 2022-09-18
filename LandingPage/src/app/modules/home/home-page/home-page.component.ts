import { Component, OnInit } from '@angular/core';
import { ScrollUpdateService } from 'src/app/shared/services/scroll-update.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  fix = false;
  arr = new Array(40);
  constructor(private sup:ScrollUpdateService) { }

  ngOnInit(): void {
    this.sup.navFixed.subscribe({next: (status:boolean)=>{
      this.fix = status;
    }})
  }

}
