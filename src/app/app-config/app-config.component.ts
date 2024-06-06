import { Component } from '@angular/core';
import { LayoutService } from '../layout.service.service';

@Component({
  selector: 'app-config',
  templateUrl: './app-config.component.html'
})
export class AppConfigComponent {

  constructor(public layoutService: LayoutService){}

}
