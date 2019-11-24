import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Biere from '../biere';

@Component({
  selector: 'app-biere',
  templateUrl: './biere.component.html',
  styleUrls: ['./biere.component.css']
})
export class BiereComponent implements OnInit {
  
  @Input()
  b: Biere
  @Output()
  deleteEvent = new EventEmitter<void>()

  constructor() { }

  ngOnInit() {
    // console.log(this.b.nom);
  }

  delete() {
    this.deleteEvent.emit();
  }

}
