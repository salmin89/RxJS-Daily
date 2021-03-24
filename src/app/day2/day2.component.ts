import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-day2',
  templateUrl: './day2.component.html',
  styleUrls: ['./day2.component.scss'],
})
export class Day2Component implements OnInit {
  visible$: Observable<boolean>;
  constructor() {}

  ngOnInit(): void {
    this.visible$ = fromEvent(document, 'visibilitychange').pipe(map(() => document['hidden']));
    this.visible$.subscribe(console.log);
  }
}
