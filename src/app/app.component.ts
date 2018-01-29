import { Component } from '@angular/core';
import { routerTransition } from './router.animations';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerTransition()]
})
export class AppComponent {
  title = 'app';

  APP_NAME = 'Ressad Nour CV';
  constructor(private translate: TranslateService) {

    translate.addLangs(["en", "fr"]);
    translate.setDefaultLang('fr');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'fr');
}
}
