import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {
  PageScrollConfig,
  PageScrollService,
  PageScrollInstance
} from 'ngx-page-scroll';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss']
})
export class MaterialComponent implements OnInit {
  constructor(
    private translate: TranslateService,
    private formBuilder: FormBuilder,
    private router: Router,
    private pageScrollService: PageScrollService) {
      PageScrollConfig.defaultScrollOffset = 0;
      PageScrollConfig.defaultDuration = 500;

      PageScrollConfig.defaultEasingLogic = {
        ease: (t: number, b: number, c: number, d: number): number => {
            // easeInOutExpo easing
            if (t === 0) { return b; }
            if (t === d) { return b + c; }
            if ((t /= d / 2) < 1) { return c / 2 * Math.pow(2, 10 * (t - 1)) + b; }
            return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
        }
    };

  }

  ngOnInit() {
  }

  changeLang(language: string) {
    this.translate.use(language);
  }
}
