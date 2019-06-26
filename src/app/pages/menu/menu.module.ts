import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'first',
        loadChildren: './pages/first-with-tabs/first-with-tabs.module#FirstWithTabsPageModule' ,
      },
      {
        path: 'second',
        loadChildren: './pages/second/second.module#SecondPageModule',

      },
      {
        path: 'second/details',
        loadChildren: './pages/details/details.module#DetailsPageModule',

      },
      {
        path: 'chat',
        loadChildren: './pages/chat/chat.module#ChatPageModule',

      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
