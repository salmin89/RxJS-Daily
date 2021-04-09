import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Day1Component } from './day1/day1.component';
import { Day2Component } from './day2/day2.component';
import { Day3Component } from './day3/day3.component';
import { Day4Component } from './day4/day4.component';
import { Day5Component } from './day5/day5.component';
import { Day6Component } from './day6/day6.component';
import { Day7Component } from './day7/day7.component';

import { LoadingService } from './loading.service';
import { TuiRepeatTimesModule } from '@taiga-ui/cdk';
import { Day8Component } from './day8/day8.component';
import { Day9Component } from './day9/day9.component';
import { Day10Component } from './day10/day10.component';
import { FilterPipe } from './filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Day11Component } from './day11/day11.component';
import { NotificationComponent } from './notification/notification.component';
import { Day12Component } from './day12/day12.component';
import { PortalComponent } from './portal/portal.component';
import { ModalService } from './modal.service';
@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, TuiRepeatTimesModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    Day1Component,
    Day2Component,
    Day3Component,
    Day4Component,
    Day5Component,
    Day6Component,
    Day7Component,
    Day8Component,
    Day9Component,
    Day10Component,
    FilterPipe,
    Day11Component,
    NotificationComponent,
    Day12Component,
    PortalComponent,
  ],
  providers: [LoadingService, ModalService],
  bootstrap: [AppComponent],
})
export class AppModule {}
