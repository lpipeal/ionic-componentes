import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {
  personajes: string[]=['Aquaman','Superman','Batman','Mujer Maravilla', 'Flash'];
  //crear propiedad booleana
  // @ViewChild('reorder1') :ReorderGroup
  activate=false;

  constructor() { }

  ngOnInit() {
  }

  doReorder(event: any){
    console.log(event);
    // se corta el arreglo actual desde el from y devuelve la primera posición
    const itemMover= this.personajes.splice(event.detail.from, 1)[0];

    //insertar elemento nuevo al arreglo, logrando cambiar de posicion el elemento
    this.personajes.splice(event.detail.to, 0, itemMover);
    event.detail.complete();
    console.log(this.personajes);
  }

  onClick(){
    this.activate=!this.activate;
  }

}
