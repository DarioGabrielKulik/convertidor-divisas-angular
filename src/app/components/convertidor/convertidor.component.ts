import { Component } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrl: './convertidor.component.css'
})
export class ConvertidorComponent {

  cantidad:number= 0;
  tengo:string = "USD";
  quiero:string = "LIBRA"; 
  total:number = 0;

  monedas:string[]=["USD","EURO","LIBRA"];

  convertir(){
    switch(this.tengo){
      case "USD": 
      if(this.quiero === "USD"){
        this.total = this.cantidad;}
        if(this.quiero === "EURO"){
          this.total = this.cantidad * 0.84;}
          if(this.quiero === "LIBRA"){
            this.total = this.cantidad * 1.75;}
      break;
      case "LIBRA":
        if(this.quiero === "USD"){
        this.total = this.cantidad * 1.75;}
        if(this.quiero === "EURO"){
          this.total = this.cantidad * 0.84;}
          if(this.quiero === "LIBRA"){
            this.total = this.cantidad ;} break;
      case "EURO": 
      if(this.quiero === "USD"){
        this.total = this.cantidad * 0.84;}
        if(this.quiero === "EURO"){
          this.total = this.cantidad ;}
          if(this.quiero === "LIBRA"){
            this.total = this.cantidad * 1.75;};
    }
  }

}
