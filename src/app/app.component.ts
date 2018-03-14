import { Component, ViewChild, ElementRef } from '@angular/core';
import { Pesos, Planilla } from './modelos/basculas';

import * as jsPDF from 'jspdf';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public bascula_uno: boolean = true;
  public print: boolean = false;
  //1  
  public rango_for_uno: boolean = false;
  public disabled_uno: boolean = false;
  public id_uno: number = 0;
  public total_uno: number = 0;
  public total_canastas_uno: number = 0;

  public objetoPlanilla: Planilla[] = [];
  public conductor_uno: string = '';
  public vehiculo_uno: string = '';
  public temperatura_uno: string = '';
  public cliente_uno: string = '';

  public consecutivo_uno: number = null;
  public fecha_uno: string = '';
  public hora_uno: string = '';
  public lugar_uno: string = '';
  public temperatura_vehiculo_uno: string = '';

  public producto_uno: string = '';
  public rango_uno: string = '';
  public cantidad_uno: number = null;
  public peso_uno: number = null;
  public peso_promedio_uno: number = null;
  public canasta_uno: number = null;
  public negativo_uno: number = null;
  //2
  public rango_for_dos: boolean = false;
  public disabled_dos: boolean = false;
  public id_dos: number = 0;
  public total_dos: number = 0;
  public total_canastas_dos: number = 0;

  public objetoPlanillaDos: Planilla[] = [];
  public conductor_dos: string = '';
  public vehiculo_dos: string = '';
  public temperatura_dos: string = '';
  public cliente_dos: string = '';


  public consecutivo_dos: number = null;
  public fecha_dos: string = '';
  public hora_dos: string = '';
  public lugar_dos: string = '';
  public temperatura_vehiculo_dos: string = '';


  public producto_dos: string = '';
  public rango_dos: string = '';
  public cantidad_dos: number = null;
  public peso_dos: number = null;
  public peso_promedio_dos: number = null;
  public canasta_dos: number = null;
  public negativo_dos: number = null;

  constructor() {
    //1
    if (JSON.parse(localStorage.getItem("PlanillaUno")) !== null && JSON.parse(localStorage.getItem("PlanillaUno")) !== 'null') {
      this.objetoPlanilla = JSON.parse(localStorage.getItem("PlanillaUno"));

      if (this.objetoPlanilla.length > 0) {

        this.consecutivo_uno = this.objetoPlanilla[0].consecutivo;
        this.fecha_uno = this.objetoPlanilla[0].fecha;
        this.hora_uno = this.objetoPlanilla[0].hora;
        this.lugar_uno = this.objetoPlanilla[0].lugar;
        this.temperatura_vehiculo_uno = this.objetoPlanilla[0].temperatura_vehiculo;


        this.conductor_uno = this.objetoPlanilla[0].conductor;
        this.temperatura_uno = this.objetoPlanilla[0].temperatura;
        this.vehiculo_uno = this.objetoPlanilla[0].vehiculo;
        this.cliente_uno = this.objetoPlanilla[0].cliente;
        this.disabled_uno = true;
        this.rango_for_uno = true;
      }
    }

    if (localStorage.getItem("TotalUno") !== null && localStorage.getItem("TotalUno") !== 'null') {
      this.total_uno = parseFloat(localStorage.getItem("TotalUno"));
    }

    //2
    if (JSON.parse(localStorage.getItem("PlanillaDos")) !== null && JSON.parse(localStorage.getItem("PlanillaDos")) !== 'null') {
      this.objetoPlanillaDos = JSON.parse(localStorage.getItem("PlanillaDos"));

      if (this.objetoPlanillaDos.length > 0) {

        this.consecutivo_dos = this.objetoPlanillaDos[0].consecutivo;
        this.fecha_dos = this.objetoPlanillaDos[0].fecha;
        this.hora_dos = this.objetoPlanillaDos[0].hora;
        this.lugar_dos = this.objetoPlanillaDos[0].lugar;
        this.temperatura_vehiculo_dos = this.objetoPlanillaDos[0].temperatura_vehiculo;


        this.conductor_dos = this.objetoPlanillaDos[0].conductor;
        this.temperatura_dos = this.objetoPlanillaDos[0].temperatura;
        this.vehiculo_dos = this.objetoPlanillaDos[0].vehiculo;
        this.cliente_dos = this.objetoPlanillaDos[0].cliente;
        this.disabled_dos = true;
        this.rango_for_dos = true;
      }
    }

    if (localStorage.getItem("TotalDos") !== null && localStorage.getItem("TotalDos") !== 'null') {
      this.total_dos = parseFloat(localStorage.getItem("TotalDos"));
    }

  }

  bascularUno() {
    this.bascula_uno = true;
  }

  bascularDos() {
    this.bascula_uno = false;
  }
  //1
  validacionEncabezadoUno() {
    if (this.conductor_uno !== ''
      && this.vehiculo_uno !== ''
      && this.temperatura_uno !== ''
      && this.cliente_uno !== ''
      && this.fecha_uno !== ''
      && this.hora_uno !== ''
      && this.lugar_uno !== ''
      && this.temperatura_vehiculo_uno !== ''
      && this.consecutivo_uno !== null) {

      if (this.objetoPlanilla.length === 0 && !this.rango_for_uno) {
        this.objetoPlanilla.push({


          consecutivo: this.consecutivo_uno,
          fecha: this.fecha_uno,
          hora: this.hora_uno,
          lugar: this.lugar_uno,
          temperatura_vehiculo: this.temperatura_vehiculo_uno,



          conductor: this.conductor_uno,
          vehiculo: this.vehiculo_uno,
          temperatura: this.temperatura_uno,
          cliente: this.cliente_uno,
          pesos: []
        })
      }

      this.rango_for_uno = true;

      if (this.objetoPlanilla[0].pesos.length === 0) {
        this.objetoPlanilla = [];
        this.objetoPlanilla.push({

          consecutivo: this.consecutivo_uno,
          fecha: this.fecha_uno,
          hora: this.hora_uno,
          lugar: this.lugar_uno,
          temperatura_vehiculo: this.temperatura_vehiculo_uno,


          conductor: this.conductor_uno,
          vehiculo: this.vehiculo_uno,
          temperatura: this.temperatura_uno,
          cliente: this.cliente_uno,
          pesos: []
        })
      }

      if (localStorage.getItem("PlanillaUno") === 'null' || localStorage.getItem("PlanillaUno") === null) {
        localStorage.setItem("PlanillaUno", JSON.stringify(this.objetoPlanilla));
      }
    } else {
      this.rango_for_uno = false;
      localStorage.setItem("PlanillaUno", null);
    }
  }
  //2
  validacionEncabezadoDos() {
    if (this.conductor_dos !== ''
      && this.vehiculo_dos !== ''
      && this.temperatura_dos !== ''
      && this.cliente_dos !== ''
      && this.fecha_dos !== ''
      && this.hora_dos !== ''
      && this.lugar_dos !== ''
      && this.temperatura_vehiculo_dos !== ''
      && this.consecutivo_dos !== null) {

      if (this.objetoPlanillaDos.length === 0 && !this.rango_for_dos) {
        this.objetoPlanillaDos.push({


          consecutivo: this.consecutivo_dos,
          fecha: this.fecha_dos,
          hora: this.hora_dos,
          lugar: this.lugar_dos,
          temperatura_vehiculo: this.temperatura_vehiculo_dos,



          conductor: this.conductor_dos,
          vehiculo: this.vehiculo_dos,
          temperatura: this.temperatura_dos,
          cliente: this.cliente_dos,
          pesos: []
        })
      }

      this.rango_for_dos = true;

      if (this.objetoPlanillaDos[0].pesos.length === 0) {
        this.objetoPlanillaDos = [];
        this.objetoPlanillaDos.push({

          consecutivo: this.consecutivo_dos,
          fecha: this.fecha_dos,
          hora: this.hora_dos,
          lugar: this.lugar_dos,
          temperatura_vehiculo: this.temperatura_vehiculo_dos,


          conductor: this.conductor_dos,
          vehiculo: this.vehiculo_dos,
          temperatura: this.temperatura_dos,
          cliente: this.cliente_dos,
          pesos: []
        })
      }

      if (localStorage.getItem("PlanillaDos") === 'null' || localStorage.getItem("PlanillaDos") === null) {
        localStorage.setItem("PlanillaDos", JSON.stringify(this.objetoPlanillaDos));
      }
    } else {
      this.rango_for_dos = false;
      localStorage.setItem("PlanillaDos", null);
    }
  }
  //1
  validacionDetallesUno() {
    if (this.producto_uno !== ''
      && this.rango_uno !== ''
      && this.canasta_uno !== null
      && this.peso_uno !== null
      && this.negativo_uno !== null) {

      let tamaño: number = 0

      switch (this.rango_uno) {
        case "Rango 1": {
          tamaño = 16;
          break;
        }
        case "Rango 2": {
          tamaño = 20;
          break;
        }
        case "Rango 3": {
          tamaño = 20;
          break;
        }
        case "Rango 4": {
          tamaño = 20;
          break;
        }
        case "Rango 5": {
          tamaño = 20;
          break;
        }
        case "Rango 6": {
          tamaño = 20;
          break;
        }
        case "Rango 7": {
          tamaño = 20;
          break;
        }
        case "Rango 8": {
          tamaño = 20;
          break;
        }
        case "Rango 9": {
          tamaño = 20;
          break;
        }
        case "Rango 10": {
          tamaño = 20;
          break;
        }
        case "Rango 11": {
          if (this.cliente_uno === 'POLLOS SAVICOL S.A.') {
            tamaño = 20;
          } else {
            tamaño = 16;
          }
          break;
        }
        case "Rango 12": {
          tamaño = 16;
          break;
        }
        case "Rango 12 Peq": {
          tamaño = 16;
          break;
        }
        case "Rango 12 Gran": {
          tamaño = 16;
          break;
        }
        case "Rango 13": {
          if (this.cliente_uno === 'POLLOS SAVICOL S.A.') {
            tamaño = 20;
          } else {
            tamaño = 16;
          }
          break;
        }
        case "Rango 14": {
          tamaño = 14;
          break;
        }
        case "Maltrato 14": {
          tamaño = 14;
          break;
        }
        case "Maltrato 16": {
          tamaño = 16;
          break;
        }
        case "Maltrato 20": {
          tamaño = 20;
          break;
        }
        case "A Granel": {
          tamaño = 1;
          break;
        }
        case "Paquete": {
          tamaño = 100;
          break;
        }

        default: {
          tamaño = 0;
          break;
        }
      }

      this.cantidad_uno = (this.canasta_uno * tamaño) - this.negativo_uno;
      this.peso_promedio_uno = this.cantidad_uno / this.peso_uno;

      this.objetoPlanilla[0].pesos.push({
        id: this.id_uno + 1,
        producto: this.producto_uno,
        rango: this.rango_uno,
        cantidad: this.cantidad_uno,
        peso: this.peso_uno,
        peso_promedio: this.peso_promedio_uno,
        canasta: this.canasta_uno,
        negativo: this.negativo_uno
      })

      this.total_canastas_uno = (this.canasta_uno * 2);
      this.total_uno = this.total_uno + (this.peso_uno + this.total_canastas_uno);

      this.total_canastas_uno = 0;

      this.producto_uno = '',
        this.rango_uno = '',
        this.canasta_uno = null,
        this.peso_uno = null,
        this.peso_promedio_uno = null,
        this.cantidad_uno = null,
        this.negativo_uno = null,

        this.disabled_uno = true;
      this.id_uno += 1;

      localStorage.setItem("PlanillaUno", null);
      localStorage.setItem("PlanillaUno", JSON.stringify(this.objetoPlanilla));
      localStorage.setItem("TotalUno", null);
      localStorage.setItem("TotalUno", this.total_uno.toString());
    }
  }
  //2
  validacionDetallesDos() {
    if (this.producto_dos !== ''
      && this.rango_dos !== ''
      && this.canasta_dos !== null
      && this.peso_dos !== null
      && this.negativo_dos !== null) {

      let tamaño: number = 0

      switch (this.rango_dos) {
        case "Rango 1": {
          tamaño = 16;
          break;
        }
        case "Rango 2": {
          tamaño = 20;
          break;
        }
        case "Rango 3": {
          tamaño = 20;
          break;
        }
        case "Rango 4": {
          tamaño = 20;
          break;
        }
        case "Rango 5": {
          tamaño = 20;
          break;
        }
        case "Rango 6": {
          tamaño = 20;
          break;
        }
        case "Rango 7": {
          tamaño = 20;
          break;
        }
        case "Rango 8": {
          tamaño = 20;
          break;
        }
        case "Rango 9": {
          tamaño = 20;
          break;
        }
        case "Rango 10": {
          tamaño = 20;
          break;
        }
        case "Rango 11": {
          if (this.cliente_dos === 'POLLOS SAVICOL S.A.') {
            tamaño = 20;
          } else {
            tamaño = 16;
          }
          break;
        }
        case "Rango 12": {
          tamaño = 16;
          break;
        }
        case "Rango 12 Peq": {
          tamaño = 16;
          break;
        }
        case "Rango 12 Gran": {
          tamaño = 16;
          break;
        }
        case "Rango 13": {
          if (this.cliente_dos === 'POLLOS SAVICOL S.A.') {
            tamaño = 20;
          } else {
            tamaño = 16;
          }
          break;
        }
        case "Rango 14": {
          tamaño = 14;
          break;
        }
        case "Maltrato 14": {
          tamaño = 14;
          break;
        }
        case "Maltrato 16": {
          tamaño = 16;
          break;
        }
        case "Maltrato 20": {
          tamaño = 20;
          break;
        }
        case "A Granel": {
          tamaño = 1;
          break;
        }
        case "Paquete": {
          tamaño = 100;
          break;
        }

        default: {
          tamaño = 0;
          break;
        }
      }

      this.cantidad_dos = (this.canasta_dos * tamaño) - this.negativo_dos;
      this.peso_promedio_dos = this.cantidad_dos / this.peso_dos;
      
      this.objetoPlanillaDos[0].pesos.push({
        id: this.id_dos + 1,
        producto: this.producto_dos,
        rango: this.rango_dos,
        cantidad: this.cantidad_dos,
        peso: this.peso_dos,
        peso_promedio: this.peso_promedio_dos,
        canasta: this.canasta_dos,
        negativo: this.negativo_dos
      })

      this.total_canastas_dos = (this.canasta_dos * 2);
      this.total_dos = this.total_dos + (this.peso_dos + this.total_canastas_dos);

      this.total_canastas_dos = 0;

      this.producto_dos = '',
      this.rango_dos = '',
      this.canasta_dos = null,
      this.peso_dos = null,
      this.peso_promedio_dos = null,
      this.cantidad_dos = null,
      this.negativo_dos = null,

        this.disabled_dos = true;
      this.id_dos += 1;

      localStorage.setItem("PlanillaDos", null);
      localStorage.setItem("PlanillaDos", JSON.stringify(this.objetoPlanillaDos));
      localStorage.setItem("TotalDos", null);
      localStorage.setItem("TotalDos", this.total_dos.toString());
    }
  }
  //1
  eliminarPesoUno(planilla: Pesos) {
    this.total_uno -= (planilla.peso + (planilla.canasta*2));
    this.objetoPlanilla[0].pesos.splice(this.objetoPlanilla[0].pesos.findIndex(peso => peso.id === planilla.id), 1);
    this.disabled_uno = false;

    localStorage.setItem("PlanillaUno", null);
    localStorage.setItem("PlanillaUno", JSON.stringify(this.objetoPlanilla));
    localStorage.setItem("TotalUno", null);
    localStorage.setItem("TotalUno", this.total_uno.toString());
  }
  //2
  eliminarPesoDos(planilla: Pesos) {
    this.total_dos -= (planilla.peso + (planilla.canasta*2));
    this.objetoPlanillaDos[0].pesos.splice(this.objetoPlanillaDos[0].pesos.findIndex(peso => peso.id === planilla.id), 1);
    this.disabled_dos = false;

    localStorage.setItem("PlanillaDos", null);
    localStorage.setItem("PlanillaDos", JSON.stringify(this.objetoPlanillaDos));
    localStorage.setItem("TotalDos", null);
    localStorage.setItem("TotalDos", this.total_dos.toString());
  }
  //1
  limpiarUno() {
    if (confirm('Si limpia los datos perdera todo el progreso que lleve hasta el momento ¿Está seguro que desea limpiar?')) {
      localStorage.setItem("PlanillaUno", null);
      localStorage.setItem("TotalUno", null);

      this.objetoPlanilla = [];

      this.consecutivo_uno = null;
      this.fecha_uno = '';
      this.hora_uno = '';
      this.lugar_uno = '';
      this.temperatura_vehiculo_uno = '';


      this.conductor_uno = '';
      this.temperatura_uno = '';
      this.vehiculo_uno = '';
      this.cliente_uno = '';
      this.disabled_uno = false;
      this.rango_for_uno = false;
      this.total_uno = 0;
    }
  }
  //1
  limpiarDos() {
    if (confirm('Si limpia los datos perdera todo el progreso que lleve hasta el momento ¿Está seguro que desea limpiar?')) {
      localStorage.setItem("PlanillaDos", null);
      localStorage.setItem("TotalDos", null);
      this.objetoPlanillaDos = [];

      this.consecutivo_dos = null;
      this.fecha_dos = '';
      this.hora_dos = '';
      this.lugar_dos = '';
      this.temperatura_vehiculo_dos = '';


      this.conductor_dos = '';
      this.temperatura_dos = '';
      this.vehiculo_dos = '';
      this.cliente_dos = '';
      this.disabled_dos = false;
      this.rango_for_dos = false;

      this.total_dos = 0;
    }
  }

  @ViewChild('pdf') el: ElementRef;

  pdfUno(): void {
    this.print = true;
    let pdf = new jsPDF('l', 'pt', 'a4');
    let options = {
      pagesplit: true
    };
    setTimeout(() => {
      pdf.addHTML(this.el.nativeElement, 40, 40, options, () => {
        pdf.save("test.pdf");
        this.print = false;
      });
    }, 1000);
  }

  pdfDos(): void {
    this.print = true;
    let pdf = new jsPDF('l', 'pt', 'a4');
    let options = {
      pagesplit: true
    };
    setTimeout(() => {
      pdf.addHTML(this.el.nativeElement, 40, 40, options, () => {
        pdf.save("test.pdf");
        this.print = false;
      });
    }, 1000);
  }

}
