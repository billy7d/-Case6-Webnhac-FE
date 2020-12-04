import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [ 
    { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
    { path: '/table-list', title: 'Table List',  icon:'content_paste', class: '' },
    { path: '/createSong', title:'Create Song',icon:'content_paste', class: '' },
    { path: '/question', title: 'Hit song',  icon:'content_paste', class: '' },
    { path: '/show-list-song', title: 'Song List',  icon:'content_paste', class: '' },
    { path: '/add-playlist', title: 'Add playlist',icon:'content_paste', class: ''},
    { path:'/show-playlist', title:'Show playlist',icon:'content_paste', class: ''},
    { path:'/createSinger',title:'Create Singer',icon:'person', class: '' }
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
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
  
}
