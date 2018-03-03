import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public bascula_uno: boolean = true;

  bascularUno(){
    this.bascula_uno = true;
  }

  bascularDos(){
    this.bascula_uno = false;
  }
}
