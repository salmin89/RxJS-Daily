import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { combineLatest, fromEvent, Observable, Subject } from 'rxjs';
import { tap, debounceTime, throttleTime, mapTo, map, skipUntil, takeUntil, repeat } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-day10',
  templateUrl: './day10.component.html',
  styleUrls: ['./day10.component.scss'],
})
export class Day10Component implements OnInit {
  PALETTE_WIDTH = 200;
  PALETTE_HEIGHT = 200;
  HUE = 197;

  @ViewChild('colorPicker') colorPicker: ElementRef<any>;

  mouseMove$: Observable<{ offsetX: number; offsetY: number }>;

  constructor(@Inject(DOCUMENT) private readonly documentRef: Document) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    const move$ = fromEvent(this.colorPicker.nativeElement, 'mousemove').pipe(
      throttleTime(50),
      map(({ offsetX, offsetY }) => ({ offsetX, offsetY }))
    );
    const down$ = fromEvent(this.colorPicker.nativeElement, 'mousedown').pipe(map(() => true));
    const up$ = fromEvent(this.documentRef, 'mouseup').pipe(map(() => false));

    this.mouseMove$ = move$.pipe(skipUntil(down$), takeUntil(up$), repeat());

    this.mouseMove$.subscribe(console.log);
  }
}
