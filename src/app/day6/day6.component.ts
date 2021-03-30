import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { shareReplay, startWith, map, withLatestFrom, scan, tap } from 'rxjs/operators';

@Component({
  selector: 'app-day6',
  templateUrl: './day6.component.html',
  styleUrls: ['./day6.component.scss'],
})
export class Day6Component implements OnInit {
  select$: Subject<number> = new Subject();
  selected$ = this.select$.pipe(
    scan((acc, curr) => {
      acc[curr] = !acc[curr];
      return acc;
    }, {}),
    startWith({}),
    shareReplay()
  );

  buyBtnClick$ = new Subject();

  purchase$ = this.buyBtnClick$.pipe(
    withLatestFrom(this.selected$),
    map(([, selected]) => selected),
    tap(() => this.select$.complete())
  );

  finalCost$ = this.purchase$.pipe(map((selected) => this.getValues(selected).length * 3));

  constructor() {}

  ngOnInit(): void {}

  getValues(selectedMap) {
    return Object.keys(selectedMap).filter((key) => selectedMap[key]);
  }
}
