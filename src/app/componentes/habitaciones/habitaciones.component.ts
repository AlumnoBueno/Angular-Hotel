import { Component } from '@angular/core';
import { Habitaciones } from '../../interfaces/habitaciones/habitaciones';

@Component({
  selector: 'app-habitaciones',
  templateUrl: './habitaciones.component.html',
  styleUrls: ['./habitaciones.component.css']
})
export class HabitacionesComponent {
  habitacion: Habitaciones[] = [{
    id: 1,
    nombre: 'zulo',
    precio: 33,
    vistas: 'no',
    foto:'zulo.png'
  },
   {
    id: 2,
    nombre: 'individual',
    precio: 50,
    vistas: 'casa',
    foto:'individual.png'
  },{
    id: 3,
    nombre: 'zoble',
    precio: 10,
    vistas: 'cdsf',
    foto:'doblel.png'
  }
];
  selectedHabitaciones?:Habitaciones;
  onSelect(habitaciones:Habitaciones):void{
    this.selectedHabitaciones = habitaciones;
  }
  onOptionsSelected(valor: any){

    this.habitacion.sort((a,b)=>{
      if(valor=='precio'){
        if(a.precio<b.precio) return 1;
        else return -1;
      }
      else{
        if(a.nombre<b.nombre) return -1;
        else return 1;
      }
      
    })
  }

  filtrar(valor:string){
    console.log("hola");
    this.habitacion.filter(elemento => elemento.nombre.toLowerCase().includes(valor.toLowerCase()));
  }
}
