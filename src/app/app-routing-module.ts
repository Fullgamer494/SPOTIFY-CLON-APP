import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Player } from './player/player';
import { StaticContainer } from './secondary/static-container/static-container';
import { FirstChild } from './secondary/first-child/first-child';
import { SecondChild } from './secondary/second-child/second-child';

const routes: Routes = [
  {
    path: 'home',
    component: Player
  },
  {
    path: 'secondary',
    component: StaticContainer,
    children: [
      {
        path: 'first',
        component: FirstChild
      },
      {
        path: 'second',
        component: SecondChild
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
