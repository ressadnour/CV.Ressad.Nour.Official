import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  public theme: string;
  public matButtonToggleGroup: string;

  constructor(private translate: TranslateService, private formBuilder: FormBuilder, private router: Router) {
  }

  ThemeSelected(theme: string) {
    this.theme = theme;
    this.router.navigate(['/' + this.theme]);
  }

  ngOnInit() {
    this.theme = 'blog';
    this.router.navigate(['/' + this.theme]);
    this.translate.setDefaultLang('fr');
  }
}
