import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { ImageModule } from 'primeng/image';
import { TabMenuModule } from 'primeng/tabmenu';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TabMenuModule, ButtonModule, MenubarModule, ImageModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  items: MenuItem[] = [];

  activeItem: MenuItem | undefined;

  ngOnInit() {
    this.items = [
      { label: 'Home', icon: 'fas fa-home' },
      { label: 'About', icon: 'fa fa-address-book' },
      { label: 'Services', icon: 'fas fa-rupee-sign' },
      { label: 'Contact', icon: 'fas fa-phone' },
    ];

    this.activeItem = this.items[0];
  }

  onActiveItemChange(event: MenuItem) {
    this.activeItem = event;
  }
}
