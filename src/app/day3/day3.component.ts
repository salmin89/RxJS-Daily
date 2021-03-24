import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-day3',
  templateUrl: './day3.component.html',
  styleUrls: ['./day3.component.scss'],
})
export class Day3Component implements OnInit {
  constructor(
    // Returns user name or throws an error
    @Inject(LoginService) private readonly service: Observable<string>
  ) {}

  ngOnInit(): void {}
}
