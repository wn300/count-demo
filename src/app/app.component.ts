import { Component } from '@angular/core';
import { Pesos, Planilla } from './modelos/basculas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public bascula_uno: boolean = true;
  //1  
  public rango_for_uno: boolean = false;
  public disabled_uno: boolean = false;
  public id_uno: number = 0;
  public total_uno: number = 0;
  public objetoPlanilla: Planilla[] = [];
  public conductor_uno: string = '';
  public vehiculo_uno: string = '';
  public temperatura_uno: string = '';
  public cliente_uno: string = '';
  public rango_uno: string = '';
  public canasta_uno: number = null;
  public peso_uno: number = null;
  public cantidad_uno: number = null;
  //2
  public rango_for_dos: boolean = false;
  public disabled_dos: boolean = false;
  public id_dos: number = 0;
  public total_dos: number = 0;
  public objetoPlanillaDos: Planilla[] = [];
  public conductor_dos: string = '';
  public vehiculo_dos: string = '';
  public temperatura_dos: string = '';
  public cliente_dos: string = '';
  public rango_dos: string = '';
  public canasta_dos: number = null;
  public peso_dos: number = null;
  public cantidad_dos: number = null;

  constructor() {
    //1
    if (JSON.parse(localStorage.getItem("PlanillaUno")) !== null && JSON.parse(localStorage.getItem("PlanillaUno")) !== 'null') {
      this.objetoPlanilla = JSON.parse(localStorage.getItem("PlanillaUno"));

      if (this.objetoPlanilla.length > 0) {
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
    if (this.conductor_uno !== '' && this.vehiculo_uno !== '' && this.temperatura_uno !== '' && this.cliente_uno !== '') {

      if (this.objetoPlanilla.length === 0 && !this.rango_for_uno) {
        this.objetoPlanilla.push({
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
    if (this.conductor_dos !== '' && this.vehiculo_dos !== '' && this.temperatura_dos !== '' && this.cliente_dos !== '') {

      if (this.objetoPlanillaDos.length === 0 && !this.rango_for_dos) {
        this.objetoPlanillaDos.push({
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
    if (this.rango_uno !== '' && this.canasta_uno !== null && this.peso_uno !== null && this.cantidad_uno !== null) {

      this.objetoPlanilla[0].pesos.push({
        id: this.id_uno + 1,
        rango: this.rango_uno,
        canasta: this.canasta_uno,
        peso: this.peso_uno,
        cantidad: this.cantidad_uno,
      })

      this.total_uno += this.peso_uno;

      this.rango_uno = '',
        this.canasta_uno = null,
        this.peso_uno = null,
        this.cantidad_uno = null,

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
    debugger
    if (this.rango_dos !== '' && this.canasta_dos !== null && this.peso_dos !== null && this.cantidad_dos !== null) {

      this.objetoPlanillaDos[0].pesos.push({
        id: this.id_dos + 1,
        rango: this.rango_dos,
        canasta: this.canasta_dos,
        peso: this.peso_dos,
        cantidad: this.cantidad_dos,
      })

      this.total_dos += this.peso_dos;

      this.rango_dos = '',
        this.canasta_dos = null,
        this.peso_dos = null,
        this.cantidad_dos = null,

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
    this.total_uno -= planilla.peso;
    this.objetoPlanilla[0].pesos.splice(this.objetoPlanilla[0].pesos.findIndex(peso => peso.id === planilla.id), 1);
    this.disabled_uno = false;

    localStorage.setItem("PlanillaUno", null);
    localStorage.setItem("PlanillaUno", JSON.stringify(this.objetoPlanilla));
    localStorage.setItem("TotalUno", null);
    localStorage.setItem("TotalUno", this.total_uno.toString());
  }
  //2
  eliminarPesoDos(planilla: Pesos) {
    this.total_dos -= planilla.peso;
    this.objetoPlanillaDos[0].pesos.splice(this.objetoPlanillaDos[0].pesos.findIndex(peso => peso.id === planilla.id), 1);
    this.disabled_dos = false;

    localStorage.setItem("PlanillaDos", null);
    localStorage.setItem("PlanillaDos", JSON.stringify(this.objetoPlanillaDos));
    localStorage.setItem("TotalDos", null);
    localStorage.setItem("TotalDos", this.total_dos.toString());
  }
}
