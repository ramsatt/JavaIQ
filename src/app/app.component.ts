import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdMobService } from './admob.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'JavaIQ';

  constructor(private adMobService: AdMobService) {
    this.adMobService.showBanner();
  }
}
