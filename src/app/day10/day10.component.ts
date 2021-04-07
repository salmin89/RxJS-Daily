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
  private readonly target$$ = new Subject<HTMLElement>();
  private readonly target$ = this.target$$.pipe(shareReplay(1));

  @ViewChild('colorPicker')
  set colorPicker(ref: ElementRef<HTMLDivElement> | undefined) {
    if (ref) {
      this.target$$.next(ref.nativeElement);
    }
  }

  private readonly mouseDown$ = this.target$.pipe(switchMap((target) => fromEvent<MouseEvent>(target, 'mousedown')));

  private readonly mouseMove$ = this.target$.pipe(switchMap((target) => fromEvent<MouseEvent>(target, 'mousemove')));

  private readonly mouseUp$ = fromEvent<MouseEvent>(this.documentRef, 'mouseup');

  public readonly pos$ = this.mouseMove$.pipe(
    skipUntil(this.mouseDown$),
    takeUntil(this.mouseUp$),
    repeat(),
    startWith({ offsetX: 50, offsetY: 50 })
  );

  constructor(@Inject(DOCUMENT) private readonly documentRef: Document) {}
}
