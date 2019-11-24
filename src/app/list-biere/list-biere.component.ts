import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { Component, OnInit, Input } from '@angular/core';
import Biere from '../biere';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {ValidateDegre} from '../degre_Validator'

@Component({
  selector: 'app-list-biere',
  templateUrl: './list-biere.component.html',
  styleUrls: ['./list-biere.component.css'],
  animations: [
    trigger('animCreaBiere', [
      transition('* => *', [
        query(':enter', stagger('300ms', [
          animate('.5s ease-in', keyframes([
            style({ color: 'yellow' }),
            style({ color: 'black' })
          ]))
        ]), { optional: true })
      ])
    ])
  ]
})
export class ListBiereComponent implements OnInit {


  bieres: Biere[];
  nomB = new FormControl('', [
    Validators.required,
    Validators.pattern("[a-zA-Z0-9- ']*")
]);
  typeB= new FormControl('', [
    Validators.required,
]);
  degreB= new FormControl('', [
    Validators.required,
    Validators.pattern('^[0-9]+(?:[.,][0-9]+)?$'),
    ValidateDegre,
]);
  formatB= new FormControl('', [
    Validators.required,
]);
  prixB= new FormControl('', [
    Validators.required,
    Validators.pattern('^[0-9]+(?:[.,][0-9]+)?$')
]);
  urlB: string;
  dateCreationB= new FormControl('', [
    Validators.required,
]);

  constructor() { }

  ngOnInit() {
    this.loadBieres();
  }
  




  

  loadBieres() {
    const bieres = localStorage.getItem("bieres");
    this.bieres = bieres ? JSON.parse(bieres) : [];
  }

  saveBieres() {
    localStorage.setItem("bieres", JSON.stringify(this.bieres));
  }

  addBiere() {
    console.log("Ajout de la bière", this.nomB);
    console.log("url de son image", this.urlB);
    this.bieres.push({
      id: this.bieres.reduce((acc, t) => acc <= t.id ? t.id + 1 : acc, 1),
      nom: this.nomB.value,
      type: this.typeB.value,
      degre: this.degreB.value,
      format: this.formatB.value,
      prix: this.prixB.value,
      url: this.urlB,
      dateCreation: this.dateCreationB.value,
    });
    this.saveBieres();
    this.nomB.setValue(''); // reactive Form
    this.typeB.setValue('');
    this.degreB.setValue('');
    this.formatB.setValue('');
    this.prixB.setValue('');
    this.urlB = null;
    this.dateCreationB.setValue('');

  }

  deleteBiere(biere: Biere) {
    console.log("suppression de la biere : ", biere);
    this.bieres = this.bieres.filter(t => t.id !== biere.id);
    this.saveBieres();
  }

}