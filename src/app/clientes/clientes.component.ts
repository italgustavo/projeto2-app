import { Component, Input, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  @Input("clientes") clientes: Array<Cliente>
  // clientes:Array<Cliente>


  constructor(private clienteService:ClienteService) { 

    this.clienteService.clientes.push({
      nome:'Italo',
      idade:28,
      valor:15000,
      data:'2018-08-08'
    });

    this.clientes = this.clienteService.clientes;


  }

  ngOnInit(): void {
  }

}
