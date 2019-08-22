import { Component, OnInit, Input } from '@angular/core';
import { Supplier } from '../../interfaces/supplier'

@Component({
  selector : 'app-adminsub2',
  templateUrl : './adminsub2.component.html',
  styleUrls : ['./adminsub2.component.css']
})


export class AdminSub2Component implements OnInit {

  @Input() currentSupplier : Supplier;

  constructor() {}

  ngOnInit () {

    console.log('Current supplier is: ' + this.currentSupplier.description)

  }

}