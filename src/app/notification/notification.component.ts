import { Component, Input } from '@angular/core';
import { Observer } from 'rxjs';

@Component({
  selector: 'notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent<T> {
  @Input()
  observer: Observer<T>;

  close() {
    this.observer.complete();
  }
}
