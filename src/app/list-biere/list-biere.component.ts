import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import Biere from '../biere';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-list-biere',
  templateUrl: './list-biere.component.html',
  styleUrls: ['./list-biere.component.css'],
  animations: [
    trigger('animCreaBiere', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),

        query(':enter', stagger('300ms', [
          animate('1s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(35px)', offset: .3 }),
            style({ opacity: 1, transform: 'translateY(0px)', offset: 1 })
          ]))
        ]), { optional: true })
      ])
    ])
  ]
})
export class ListBiereComponent implements OnInit {
  bieres: Biere[];
  nomB = new FormControl("");
  typeB: string;
  degreB: number;
  formatB: number;
  prixB: number;
  urlB: string;
  dateCreationB: string;

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
      type: this.typeB,
      degre: this.degreB,
      format: this.formatB,
      prix: this.prixB,
      url: this.urlB,
      dateCreation: this.dateCreationB
    });
    this.saveBieres();
    this.nomB.setValue(''); // reactive Form
    this.typeB = null;
    this.degreB = null;
    this.formatB = null;
    this.prixB = null;
    this.urlB = null;
    this.dateCreationB = null;

  }

  deleteBiere(biere: Biere) {
    console.log("suppression de la biere : ", biere);
    this.bieres = this.bieres.filter(t => t.id !== biere.id);
  }

}