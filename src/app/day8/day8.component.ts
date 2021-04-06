import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, OperatorFunction, of } from 'rxjs';
import { switchMap, debounceTime, scan, distinctUntilChanged, startWith } from 'rxjs/operators';

function requestBackendEmulation(search: string): Observable<readonly string[]> {
  console.log('backend called');

  const tests = ['test1', 'test2', 'test3'].filter((test) => !!search && test.startsWith(search));

  if (tests.length) {
    return of(tests);
  }

  if (search.startsWith('1')) {
    return of(['125', '12', '199']);
  }

  return of([]);
}

export function smartSearch<T>(
  getSearchFunction: (search: string) => Observable<readonly T[]>,
  searchDebouceTimeMs: number = 400
): OperatorFunction<string, readonly T[] | null> {
  return (source) =>
    source.pipe(
      debounceTime(searchDebouceTimeMs),
      scan((previousSearched, current) => {
        return previousSearched !== '' && current.startsWith(previousSearched) ? previousSearched : current;
      }, ''),
      distinctUntilChanged(),
      switchMap(getSearchFunction),
      startWith([])
    );
}

@Component({
  selector: 'app-day8',
  templateUrl: './day8.component.html',
  styleUrls: ['./day8.component.scss'],
})
export class Day8Component {
  readonly control = new FormControl('');

  readonly items$ = this.control.valueChanges.pipe(smartSearch(requestBackendEmulation));

  readonly filterValue = (item: string, value: string): boolean => item.startsWith(value);

  readonly emptyArray = [];
}
