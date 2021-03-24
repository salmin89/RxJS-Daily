import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Day1Component } from './day1/day1.component';
import { Day2Component } from './day2/day2.component';
import { Day3Component } from './day3/day3.component';

const routes: Routes = [
  {
    path: 'day1',
    component: Day1Component,
  },
  {
    path: 'day2',
    component: Day2Component,
  },
  {
    path: 'day3',
    component: Day3Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
