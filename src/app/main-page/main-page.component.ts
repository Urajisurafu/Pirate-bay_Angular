import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  constructor(private router: Router) {}

  @ViewChild('myNameElem') myNameElem: ElementRef | undefined;

  changePage(event: any) {
    console.log(this.router.url);
    for (let i = 0; i < this.myNameElem?.nativeElement.children.length; i++)
      if (event.target === this.myNameElem?.nativeElement.children[i]) {
        event.target.style.borderBottom = 'none';
      } else {
        event.currentTarget.children[i].style = '.choice-section';
      }
  }
}
