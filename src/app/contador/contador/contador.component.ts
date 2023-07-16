
import {Component}from '@angular/core';


@Component({

    selector: 'app-contador',

    template: `

        <h1>{{titulo}}</h1>
 


        <button (click)="acumular(base)"> + 5</button>
        <span>{{numero}}</span>

        <button (click)="acumular(- base)"> - 5</button>

        <h3>la base es: <strong>{{base}}</strong></h3>

    `

})

export class ContadorComponent{

    public titulo: string = 'Contador App';
    numero: number = 10
   base: number = 5
   acumular(valor: number){
   
   this.numero += valor;
   

}
}