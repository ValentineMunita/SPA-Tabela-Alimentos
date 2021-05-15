import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'spa-alimentos',
  templateUrl: './alimentos.component.html',
  styleUrls: ['./alimentos.component.css']
})
export class AlimentosComponent implements OnInit {  
  constructor() { }

  ngOnInit(): void {
  }
  @Input() tabOn: string = "Tabela Oculta";
}
