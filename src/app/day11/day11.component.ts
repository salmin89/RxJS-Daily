import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification/notification.service';

@Component({
  selector: 'app-day11',
  templateUrl: './day11.component.html',
  styleUrls: ['./day11.component.scss'],
})
export class Day11Component {
  text = 'Example';

  constructor(readonly service: NotificationService) {}

  show() {
    this.service.show(this.text).subscribe();
  }
}
