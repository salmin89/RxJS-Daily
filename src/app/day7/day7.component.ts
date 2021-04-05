import { Component, Inject, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, filter, debounceTime, distinct, startWith, throttleTime, distinctUntilChanged, pairwise } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';

const THRESHOLD = 500;

@Component({
  selector: 'app-day7',
  templateUrl: './day7.component.html',
  styleUrls: ['./day7.component.scss'],
})
export class Day7Component implements OnInit {
  readonly hidden$ = fromEvent(this.documentRef, 'scroll').pipe(
    throttleTime(50),
    map(() => this.documentRef.documentElement.scrollTop),
    pairwise(),
    map(([prev, next]) => next > THRESHOLD || prev < next),
    distinctUntilChanged()
  );

  constructor(@Inject(DOCUMENT) private readonly documentRef: Document) {}

  ngOnInit(): void {}
}
