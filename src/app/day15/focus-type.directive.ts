import { Directive, Output } from '@angular/core';
import { Observable, of } from 'rxjs';

export type FocusType = 'keyboard' | 'mouse' | 'touch' | 'script' | 'blur';

@Directive({
  selector: '[focusType]',
})
export class FocusTypeDirective {
  @Output()
  readonly focusType: Observable<FocusType> = of('blur');
}
