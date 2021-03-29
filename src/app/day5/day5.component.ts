import { Component, OnInit } from '@angular/core';
import { timer, interval, BehaviorSubject } from 'rxjs';
import { map, takeWhile, withLatestFrom, switchMap, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-day5',
  templateUrl: './day5.component.html',
  styleUrls: ['./day5.component.scss'],
})
export class Day5Component implements OnInit {
  start = new BehaviorSubject(10);

  countdown$ = this.start.pipe(
    switchMap((start) =>
      interval(1000).pipe(
        map((num) => start - num),
        takeWhile((current) => current >= 0)
      )
    ),
    shareReplay()
  );

  constructor() {
    this.countdown$.subscribe(console.log);
  }

  ngOnInit(): void {}
}
