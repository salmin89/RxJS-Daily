import { Component, Inject, Input, ElementRef } from '@angular/core';
import { Observer, fromEvent, timer } from 'rxjs';
import { repeatWhen, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent<T> {
  @Input()
  observer: Observer<T>;

  readonly mouseenter$ = fromEvent(this.elementRef.nativeElement, 'mouseenter');

  readonly mouseleave$ = fromEvent(this.elementRef.nativeElement, 'mouseleave');

  readonly close$ = timer(3000).pipe(
    takeUntil(this.mouseenter$),
    repeatWhen(() => this.mouseleave$),
    tap(this.close.bind(this))
  );

  close() {
    this.observer.complete();
  }

  constructor(@Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>) {}
}
