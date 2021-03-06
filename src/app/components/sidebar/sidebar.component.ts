import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'HRMS',  icon: 'design_app', class: '' },
    { path: '/icons', title: 'Projects',  icon:'education_atom', class: '' },
    { path: '/maps', title: 'TaskBoards',  icon:'location_map-big', class: '' },
    { path: '/notifications', title: 'Chats',  icon:'ui-1_bell-53', class: '' },

    { path: '/user-profile', title: 'Knowledge Base',  icon:'users_single-02', class: '' },
    { path: '/table-list', title: 'Reports',  icon:'design_bullet-list-67', class: '' },
    { path: '/typography', title: 'Settings',  icon:'text_caps-small', class: '' }

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  };
}
