import { Component, HostListener, OnInit} from '@angular/core';
import { ScrollUpdateService } from './shared/services/scroll-update.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'landing-page';
  fix:boolean = false;
  constructor(private sup:ScrollUpdateService){

  }
  @HostListener('window:scroll') onScroll(e: Event): void {
    if(document.documentElement.scrollTop >= 40 && !this.fix){// checking fix value, since we don't want to change fix if it's 
    // already true
         this.fix=true;
         this.sup.navbarFixed(this.fix);
    }else if(document.documentElement.scrollTop < 40 && this.fix){
      this.fix = false;
      this.sup.navbarFixed(this.fix);
    }
}
scrollPageTop(){
  document.documentElement.scrollTop = 0;
}
  ngOnInit(): void {
  
  }
  
}
