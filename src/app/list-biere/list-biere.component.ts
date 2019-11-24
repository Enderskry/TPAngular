import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { Component, OnInit, Input } from '@angular/core';
import Biere from '../biere';
import { FormControl } from '@angular/forms';

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
  nomB = new FormControl("");
  typeB = new FormControl("");
  degreB = new FormControl("");
  formatB = new FormControl("");
  prixB = new FormControl("");
  urlB = new FormControl("");
  dateCreationB = new FormControl("");

  @Input()
  biereAModif: Biere;

  constructor() { }

  ngOnInit() {
    this.loadBieres();
    console.log(this.biereAModif);
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
      url: this.urlB.value,
      dateCreation: this.dateCreationB.value
    });
    this.saveBieres();
    this.nomB.setValue(''); // reactive Form
    this.typeB.setValue('');
    this.degreB.setValue('');
    this.formatB.setValue('');
    this.prixB.setValue('');
    this.urlB.setValue('');
    this.dateCreationB.setValue('');

  }

  deleteBiere(biere: Biere) {
    console.log("suppression de la biere : ", biere);
    this.bieres = this.bieres.filter(t => t.id !== biere.id);
    this.saveBieres();
  }

}