import { Component, OnInit } from '@angular/core';
import Biere from '../biere';

@Component({
  selector: 'app-list-biere',
  templateUrl: './list-biere.component.html',
  styleUrls: ['./list-biere.component.css']
})
export class ListBiereComponent implements OnInit {
  bieres: Biere[];
  newBiere: Biere;

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

  addTodo() {
    console.log("Ajout de la bière", this.newBiere);
    this.bieres.push({
      // id: this.todos.length +1,
      id: this.bieres.reduce((acc, t) => acc <= t.id ? t.id + 1 : acc, 1),
      nom: this.newBiere.nom,
      type: this.newBiere.type,
      degre: this.newBiere.degre,
      format: this.newBiere.format,
      prix: this.newBiere.prix,
      url: this.newBiere.url,
      dateCreation: this.newBiere.dateCreation
    });
    this.saveBieres();
  }

  deleteBiere(biere: Biere) {
    console.log("suppression de la biere : ", biere);
    this.bieres = this.bieres.filter(t => t.id !== biere.id);
  }

}
