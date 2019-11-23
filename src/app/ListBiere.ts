
import Biere from './biere';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';


@NgModule ({
    imports: [
    MatSliderModule]
  })


export class ListBiere {
    private _biere: Biere;
    private _titre: string;

}
