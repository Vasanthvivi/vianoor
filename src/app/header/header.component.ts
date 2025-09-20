import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false
})
export class HeaderComponent implements OnInit {
  hideHeader = false;
  private lastScrollTop = 0;  

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    
    if (st > this.lastScrollTop) {
      // scrolling down → hide
      this.hideHeader = true;
    } else {
      // scrolling up → show
      this.hideHeader = false;
    }
    this.lastScrollTop = st <= 0 ? 0 : st; // avoid negative
  }

  
  constructor() { }

  ngOnInit() {
  }

}
