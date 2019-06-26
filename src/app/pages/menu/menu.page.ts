import { Component, OnInit } from '@angular/core';
import { RouterEvent, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages = [{
              title: 'Perfil',
              url: '/menu/first'
            },
            {
              title: 'Eventos',
              url: '/menu/second'
            },
            {
              title: 'Chat',
              url: '/menu/chat'
            }
          ];

  selectedpath = '';

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) =>  {
      if  (event && event.url) {
        this.selectedpath = event.url;
      }
    });
   }

  ngOnInit() {
  }

}
