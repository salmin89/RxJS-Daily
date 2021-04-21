import { Component, OnInit } from '@angular/core';
import { FocusType } from './focus-type.directive';

@Component({
  selector: 'app-day15',
  templateUrl: './day15.component.html',
  styleUrls: ['./day15.component.scss'],
})
export class Day15Component implements OnInit {
  focusType: FocusType = 'blur';

  constructor() {}

  ngOnInit(): void {}
}
