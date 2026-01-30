import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdMobService } from './admob.service';
import { CustomAlertComponent } from './custom-alert/custom-alert.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CustomAlertComponent],
  template: `
    <router-outlet></router-outlet>
    <app-custom-alert></app-custom-alert>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'JavaIQ';

  constructor(private adMobService: AdMobService) {
    this.adMobService.showBanner();
  }
}
