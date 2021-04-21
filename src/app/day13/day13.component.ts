import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day13',
  templateUrl: './day13.component.html',
  styleUrls: ['./day13.component.scss'],
})
export class Day13Component {
  scale = 1;

  get transform(): string {
    return `scale(${this.scale})`;
  }

  get height(): number {
    return this.scale * 100;
  }

  onElastic(scale: number) {
    this.scale = Math.max(scale, 0.5);
  }
}
