import { Component, OnInit } from '@angular/core';

const SUBTITLES = [
  {
    text: 'It had a begining',
    duration: 1000,
  },
  {
    text: 'It must have an end',
    duration: 1500,
  },
  {
    text: "Don't leave me in darkness",
    duration: 1000,
  },
  {
    text: 'Please give me your hand',
    duration: 2000,
  },
];

@Component({
  selector: 'app-day9',
  templateUrl: './day9.component.html',
  styleUrls: ['./day9.component.scss'],
})
export class Day9Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
