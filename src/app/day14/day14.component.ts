import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day14',
  templateUrl: './day14.component.html',
  styleUrls: ['./day14.component.scss'],
})
export class Day14Component implements OnInit {
  readonly folders = ['memes', 'jokes', 'tips', 'tricks'];

  constructor() {}

  ngOnInit(): void {}
}
