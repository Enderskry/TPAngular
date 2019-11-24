import { Component, OnInit, Input } from '@angular/core';
import Biere from '../biere';

@Component({
  selector: 'app-biere',
  templateUrl: './biere.component.html',
  styleUrls: ['./biere.component.css']
})
export class BiereComponent implements OnInit {
  
  @Input()
  b: Biere

  constructor() { }

  ngOnInit() {
    // console.log(this.b.nom);
  }

}

