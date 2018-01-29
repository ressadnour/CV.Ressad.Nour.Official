import { Component, OnInit } from '@angular/core';
import { ScrollToEvent, ScrollToAnimationEasing, ScrollToOffsetMap } from '@nicky-lenaers/ngx-scroll-to';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public ngxScrollToDestination: string;
  public ngxScrollToEvent: ScrollToEvent;
  public ngxScrollToDuration: number;
  public ngxScrollToEasing: ScrollToAnimationEasing;
  public ngxScrollToOffset: number;
  public ngxScrollToOffsetMap: ScrollToOffsetMap;
  public APP_NAME: string;

  menuHidden = true;


  constructor(private translate: TranslateService) {
    this.APP_NAME = 'Ressad Nour CV';
    this.ngxScrollToEvent = 'click';
    this.ngxScrollToDuration = 1500;
    this.ngxScrollToEasing = 'easeOutElastic';
    this.ngxScrollToOffset = 300;
    this.ngxScrollToOffsetMap = new Map();
    // this.ngxScrollToOffsetMap.set(480, 100).set(768, 200).set(1240, 300).set(1920, 400);
  }

  ngOnInit() {
  }

  toggleMenu() {
    this.menuHidden = !this.menuHidden;
  }

  changeLang(language: string) {
    this.translate.use(language);
  }

}
