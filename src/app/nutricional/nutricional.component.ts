import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'spa-nutricional',
  templateUrl: './nutricional.component.html',
  styleUrls: ['./nutricional.component.css']
})
export class NutricionalComponent implements OnInit {  
  constructor() { }

  ngOnInit(): void {
  }
  @Input() tabOn2: string = "Tabela Oculta";
}
