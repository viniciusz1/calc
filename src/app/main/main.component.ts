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
    if(this.numerosTela == "+" ||this.numerosTela == "-" ||this.numerosTela == "/" ||this.numerosTela == "*"){
      this.limpar();
    }
    if(this.numerosTela.substring(this.numerosTela.length -1) === "+" && evento === "+"){

    }else if(this.numerosTela.substring(this.numerosTela.length -1) === "-" && evento === "-"){
    }else if(this.numerosTela.substring(this.numerosTela.length -1) === "*" && evento === "*"){
    }else if(this.numerosTela.substring(this.numerosTela.length -1) === "/" && evento === "/"){
    }else{

      
     this.numerosTela += evento;
      
    }
    
    
    
  }
  
  }

