import { Component, OnInit } from '@angular/core';
import Biere from '../biere';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {ValidateDegre} from '../degre_Validator'

@Component({
  selector: 'app-list-biere',
  templateUrl: './list-biere.component.html',
  styleUrls: ['./list-biere.component.css']
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
