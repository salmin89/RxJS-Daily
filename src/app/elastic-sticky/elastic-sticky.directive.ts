import { Directive, Output } from '@angular/core';
import { Observable, of } from 'rxjs';

@Directive({
  selector: '[elasticSticky]',
})
export class ElasticStickyDirective {
  @Output()
  elasticSticky: Observable<number> = of(1);
}
