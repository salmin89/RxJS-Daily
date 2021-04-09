import { Component, Inject, OnInit } from '@angular/core';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-day12',
  templateUrl: './day12.component.html',
  styleUrls: ['./day12.component.scss'],
})
export class Day12Component {
  constructor(@Inject(ModalService) readonly modal$$: ModalService) {}
}
