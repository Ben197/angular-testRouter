import { Component, OnInit } from '@angular/core';
import { Supplier } from '../interfaces/supplier'


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {

  currentSupplier : Supplier  = {id: 1, description: 'Grocery world', products: 
  ['Cheese', 'Butter', 'Eggs']};

  selection = 1;
  constructor() {}

  ngOnInit() {

  }

  selection1(){
    this.selection = 1;
  }

    selection2(){
    this.selection = 2;
  }  
}


