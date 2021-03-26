import { Component, ComponentFactoryResolver, Inject, OnInit } from '@angular/core';
import { from, Observable, of, Subject, timer, interval, merge } from 'rxjs';
import { catchError, delay, switchMap, take, tap, map, filter, takeUntil, shareReplay, mapTo, repeat, startWith } from 'rxjs/operators';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-day3',
  templateUrl: './day3.component.html',
  styleUrls: ['./day3.component.scss'],
})
export class Day3Component implements OnInit {
  constructor(@Inject(LoginService) private readonly service: Observable<string>) {}

  error$: Observable<boolean>;
  userName$: Observable<string>;
  loading$ = new Subject();

  ngOnInit(): void {}

  login() {
    this.loading$.next(true);

    const request$: Observable<{ username?: string; error?: any }> = this.service.pipe(
      take(1),
      map((username) => ({ username })),
      catchError((error) => of({ error })),
      tap(() => this.loading$.next(false)),
      shareReplay()
    );

    this.error$ = request$.pipe(
      filter((res) => !!res.error),
      switchMap(() => {
        return timer(5000).pipe(mapTo(false), startWith(true));
      })
    );

    this.userName$ = request$.pipe(
      filter((res) => !!res.username),
      map((res) => res.username)
    );
  }
}
