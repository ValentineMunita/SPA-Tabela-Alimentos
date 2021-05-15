import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Dessert } from '../model/alimentos';
import { Dessert2 } from '../model/nutricional';
import {Sort} from '@angular/material/sort';

@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  valor: number;
  exibeTabela:  boolean = false;
  exibeTabela2:  boolean = false;
  status: string = "Tabela Oculta";
  status2: string = "Tabela Oculta";
  
  constructor() {
    this.sortedData = this.desserts.slice();
    this.sortedData2 = this.desserts2.slice();
   }

   
  desserts: Dessert[] = [
    { codigo: 1, nome: 'Beterraba', valor:'R$5,00' },
    { codigo: 2, nome: 'Laranja', valor:'R$7,00' },
    { codigo: 3, nome: 'Cenoura', valor:'R$2,00' },
    { codigo: 4, nome: 'Mandioca', valor:'R$6,00' },
    { codigo: 5, nome: 'Arroz', valor:'R$50,00' },
    { codigo: 6, nome: 'Feijão', valor:'R$15,00' },
    { codigo: 7, nome: 'Maçã', valor:'R$5,00' },
    { codigo: 8, nome: 'Salame', valor:'R$100,00' },
    { codigo: 9, nome: 'Queijo Prato', valor:'R$40,00' },
    { codigo: 10, nome: 'Linguiça', valor:'R$20,00' },
  ];

  desserts2: Dessert2[] = [
    { nome: 'Beterraba', nutricional:'100 kcal',vd:'2%' },
    { nome: 'Laranja', nutricional:'150 kcal',vd:'3%' },
    { nome: 'Cenoura', nutricional:'70 kcal',vd:'1.5%' },
    { nome: 'Mandioca', nutricional:'300 kcal',vd:'6%' },
    { nome: 'Arroz', nutricional:'160 kcal',vd:'3.2%' },
    { nome: 'Feijão', nutricional:'300 kcal',vd:'6%' },
    { nome: 'Maçã', nutricional:'20 kcal',vd:'0.5%' },
    { nome: 'Salame', nutricional:'500 kcal',vd:'10%' },
    { nome: 'Queijo Prato', nutricional:'200 kcal',vd:'4%' },
    { nome: 'Linguiça', nutricional:'400 kcal',vd:'8%' },
  ];

  sortedData: Dessert[];
  sortedData2: Dessert2[];

  sortData(sort: Sort) {
    const data = this.desserts.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'codigo': return compare(a.codigo, b.codigo, isAsc);
        case 'nome': return compare(a.nome, b.nome, isAsc);
        case 'valor': return compare(a.valor, b.valor, isAsc);
        default: return 0;
      }
    });
  }
  sortData2(sort: Sort) {
    const data = this.desserts2.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData2 = data;
      return;
    }

    this.sortedData2 = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'nome': return compare(a.nome, b.nome, isAsc);
        case 'nutricional': return compare(a.nutricional, b.nutricional, isAsc);
        case 'vd': return compare(a.vd, b.vd, isAsc);
        default: return 0;
      }
    });
  }
  ngOnInit(): void {
    
  }


  exibirTabela(){
    this.exibeTabela = true;
    this.status = "Mostrando Tabela";
  }

  ocultarTabela(){
    this.exibeTabela = false;
    this.status = "Tabela Oculta";
  }

  exibirTabela2(){
    this.exibeTabela2 = true;
    this.status2 = "Mostrando Tabela";
  }

  ocultarTabela2(){
    this.exibeTabela2 = false;
    this.status2 = "Tabela Oculta";
  }

}
function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
