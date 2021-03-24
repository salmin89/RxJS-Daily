import { Component, Inject, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PAGE_VISIBILITY } from './page-visibility.token';

@Component({
  selector: 'app-day2',
  templateUrl: './day2.component.html',
  styleUrls: ['./day2.component.scss'],
})
export class Day2Component implements OnInit {
  constructor(@Inject(PAGE_VISIBILITY) private readonly pageVisibility$: Observable<boolean>) {}

  unsubcribe = new Subject();

  ngOnDestroy() {
    this.unsubcribe.next();
    this.unsubcribe.complete();
  }

  ngOnInit() {
    this.pageVisibility$.pipe(takeUntil(this.unsubcribe)).subscribe(console.log);
  }
}
