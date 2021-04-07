import { Component, ViewChild, ElementRef, Inject } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { skipUntil, takeUntil, repeat, startWith, switchMap, shareReplay } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-day10',
  templateUrl: './day10.component.html',
  styleUrls: ['./day10.component.scss'],
})
export class Day10Component {
  @ViewChild('colorPicker')
  set colorPicker(ref: ElementRef<HTMLDivElement> | undefined) {
    if (ref) {
      // 0. once we have the ref we can trigger the stream
      this.target$$.next(ref.nativeElement);
    }
  }

  // 1. the element appears
  private readonly target$$ = new Subject<HTMLElement>();

  // 2. Share the latest target, once
  private readonly target$ = this.target$$.pipe(shareReplay(1));

  // 3. Three individual streams
  private readonly mouseDown$ = this.target$.pipe(switchMap((target) => fromEvent<MouseEvent>(target, 'mousedown')));
  private readonly mouseMove$ = this.target$.pipe(switchMap((target) => fromEvent<MouseEvent>(target, 'mousemove')));
  private readonly mouseUp$ = fromEvent<MouseEvent>(this.documentRef, 'mouseup');

  // 4. The position is dependent on the above streams
  public readonly pos$ = this.mouseMove$.pipe(
    skipUntil(this.mouseDown$),
    takeUntil(this.mouseUp$),
    repeat(),
    startWith({ offsetX: 50, offsetY: 50 })
  );

  constructor(@Inject(DOCUMENT) private readonly documentRef: Document) {}
}
