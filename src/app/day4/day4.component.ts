import { Component, Inject, OnInit } from '@angular/core';
import { LoadingService } from '../loading.service';

@Component({
  selector: 'app-day4',
  templateUrl: './day4.component.html',
  styleUrls: ['./day4.component.scss'],
})
export class Day4Component {
  constructor(@Inject(LoadingService) private readonly loadingService: LoadingService) {}

  onButtonClick() {}
}
