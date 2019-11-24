import { AbstractControl } from '@angular/forms';

export function ValidateDegre(degre: AbstractControl){
    if (parseInt(degre.value) <1 || parseInt(degre.value) >15){
        return {validDegre: true};
    }
    return null;
}