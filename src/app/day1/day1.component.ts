import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-day1',
  templateUrl: './day1.component.html',
  styleUrls: ['./day1.component.scss'],
})
export class Day1Component implements OnInit {
  @ViewChild('focusGroup') focusGroup: ElementRef;

  selected$ = new Subject<any>();
  children: any[];

  constructor() {
    this.selected$.subscribe(console.log);
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.children = this.getKeyboardFocusableElements(this.focusGroup.nativeElement);

    this.children.forEach((child) => {
      child.addEventListener('blur', this.removeSelected.bind(this));
      child.addEventListener('focus', this.setSelected.bind(this));
    });
  }

  removeSelected() {
    this.selected$.next(null);
  }
  setSelected(e) {
    this.selected$.next(e.target);
  }

  ngOnDestroy() {
    this.children.forEach((child) => {
      child.removeEventListener('blur', this.removeSelected.bind(this));
      child.removeEventListener('focus', this.setSelected.bind(this));
    });

    this.selected$.complete();
  }

  getKeyboardFocusableElements(element) {
    return [...element.querySelectorAll('a, button, input, textarea, select, details,[tabindex]:not([tabindex="-1"])')].filter(
      (el) => !el.hasAttribute('disabled')
    );
  }
}
