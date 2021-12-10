import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.css']
})
export class BotaoComponent implements OnInit {

  constructor() { }
  @Input() numbers;
  @Output() onClick = new EventEmitter<any>();
  ngOnInit() {
  }
  clickDiv(){
    this.onClick.emit(this.numbers);
  }
}
