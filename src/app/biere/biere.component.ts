import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Biere from '../biere';
import { trigger, state, style, transition, animate } from '@angular/animations';

const ANIMATION_TIME = 300

@Component({
  selector: 'app-biere',
  templateUrl: './biere.component.html',
  styleUrls: ['./biere.component.css'],
  animations: [
    trigger('supprBiere', [
      state('isNotDeleting', style({ opacity: 1 })),
      state('isDeleting', style({opacity: 0 })),
      transition('isNotDeleting => isDeleting', animate(ANIMATION_TIME))

    ])]
})
export class BiereComponent implements OnInit {
  
  @Input()
  b: Biere

  @Output()
  deleteEvent = new EventEmitter<void>()

  @Output()
  biereAModif: Biere

  @Output()
  deleteVisu = new EventEmitter<Biere>();


  isDeleting = false

  constructor() { }

  ngOnInit() {
    // console.log(this.b.nom);
  }

  delete() {
    this.deleteEvent.emit();
    this.isDeleting = true
    setTimeout(() => this.deleteVisu.emit(this.b), ANIMATION_TIME + 50)
  }
  modif() {
    console.log(this.b);
    // this.biereAModif = this.b;
  }

}
