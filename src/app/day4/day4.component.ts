import { Component, Inject, OnInit } from '@angular/core';
import { LoadingService } from '../loading.service';
import { filter, startWith, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-day4',
  templateUrl: './day4.component.html',
  styleUrls: ['./day4.component.scss'],
})
export class Day4Component {
  loading$;
  complete$;

  constructor(@Inject(LoadingService) private readonly loadingService: LoadingService) {}

  onButtonClick() {
    const loader$ = this.loadingService.load();

    this.loading$ = loader$.pipe(filter((res) => Number.isFinite(res)));
    this.complete$ = loader$.pipe(filter((res) => !Number.isFinite(res)));
  }
}
