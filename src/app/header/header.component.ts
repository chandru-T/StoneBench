import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        routerLink: ['/home']
      },
      {
        label: 'About',
        routerLink: ['/about']
      },
      {
        label: 'Services',
        routerLink: ['/services']
      },
      {
        label: 'Contact',
        routerLink: ['/contact']
      }
    ];
  }
}
