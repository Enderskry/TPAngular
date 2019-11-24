import { Component, OnInit } from '@angular/core';
import Biere from '../biere';

@Component({
  selector: 'app-list-biere',
  templateUrl: './list-biere.component.html',
  styleUrls: ['./list-biere.component.css']
})
export class ListBiereComponent implements OnInit {
  bieres: Biere[];
  nomB: string;
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
      nom: this.nomB,
      type: this.typeB,
      degre: this.degreB,
      format: this.formatB,
      prix: this.prixB,
      url: this.urlB,
      dateCreation: this.dateCreationB
    });
    this.saveBieres();
  }

  deleteBiere(biere: Biere) {
    console.log("suppression de la biere : ", biere);
    this.bieres = this.bieres.filter(t => t.id !== biere.id);
  }

}
