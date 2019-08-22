import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})


export class AdminComponent implements OnInit {
  keuze = 1;
  constructor() {}

  ngOnInit() {

  }

  keuze1(){
    this.keuze = 1;
  }

    keuze2(){
    this.keuze = 2;
  }

  
}