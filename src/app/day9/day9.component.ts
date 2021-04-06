import { Component, OnInit } from '@angular/core';
import { of, from } from 'rxjs';
import { startWith, delay, repeat, concatMap } from 'rxjs/operators';

interface Line {
  readonly words: readonly string[];
  readonly duration: number;
}

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
  readonly song$ = from([{ text: '', duration: 2000 }, ...SUBTITLES]).pipe(
    concatMap(({ text, duration }, i) =>
      of(null).pipe(
        delay(duration),
        startWith([
          { duration, words: text.split(' ') },
          { duration, words: SUBTITLES[i]?.text.split(' ') },
        ])
      )
    ),
    repeat()
  );
  constructor() {
    // this.song$.subscribe(console.log);
  }

  ngOnInit(): void {}

  getDuration({ duration, words }: Line): number {
    return duration / words.length;
  }
}
