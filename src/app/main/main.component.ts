import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }
 
  ngOnInit() {
  }
  numerosTela = ""
  limpar(){
    this.numerosTela = ""
  }
  resultado(){
    this.numerosTela = eval(this.numerosTela);
  }
  clickDiv(evento){
    this.numerosTela += evento;
  }
  
  }

