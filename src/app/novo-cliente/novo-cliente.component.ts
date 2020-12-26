import { Component, Input, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-novo-cliente',
  templateUrl: './novo-cliente.component.html',
  styleUrls: ['./novo-cliente.component.css']
})
export class NovoClienteComponent implements OnInit {

  @Input("clientes") clientes: any
  cliente:Cliente = {
    nome: "",
    idade: 0,
    valor: 0,
    data: '2018-08-08'
  }

  addCliente(){
    //Essa linha cria um objeto novo cada vez que a função e executada
    let cli = Object.assign({},this.cliente);
    this.clientes.push(cli);
  }

  constructor(private clienteService:ClienteService) { 
    this.clientes = this.clienteService.clientes
  }

  ngOnInit(): void {
  }

}
