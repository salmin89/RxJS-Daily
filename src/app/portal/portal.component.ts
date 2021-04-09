import { Component, Inject, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { ModalService } from '../modal.service';
import { combineLatest, fromEvent, Subscription } from 'rxjs';
import { filter, takeWhile, switchMap, withLatestFrom, repeat, map } from 'rxjs/operators';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss'],
})
export class PortalComponent {
  readonly esc$ = fromEvent(this.elementRef.nativeElement, 'keydown').pipe(filter((e: KeyboardEvent) => e.code === 'Escape'));

  readonly outSideClick$ = fromEvent(this.elementRef.nativeElement, 'mousedown').pipe(
    filter((e: MouseEvent) => e.target === this.overlay?.nativeElement)
  );

  @ViewChild('overlay') overlay: ElementRef<HTMLElement>;

  constructor(
    @Inject(ModalService) readonly modal$$: ModalService,
    @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>
  ) {}

  ngOnInit() {
    this.esc$
      .pipe(
        withLatestFrom(this.modal$$),
        takeWhile(([esc, modal]) => modal !== null),
        repeat()
      )
      .subscribe(([esc, modal]) => {
        this.modal$$.next(null);
      });

    this.outSideClick$
      .pipe(
        withLatestFrom(this.modal$$),
        takeWhile(([esc, modal]) => modal !== null),
        repeat()
      )
      .subscribe(() => {
        this.modal$$.next(null);
      });
  }
}
