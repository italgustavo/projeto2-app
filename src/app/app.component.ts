import { Component } from '@angular/core';
import { Cliente } from './cliente';

import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Meu Primeiro App';
  cli: Cliente = new Cliente();
  clientes: Array<Cliente>;

  construtor(){
    this.cli = new Cliente();
    this.clientes = Array<Cliente>();
    // let clienteServico = new ClienteService();
    // this.clientes = clienteServico.clientes;
    // this.clientes.push(
    //    {
    //      nome:'Italo',
    //      idade:28,
    //      valor:15000,
    //      data:'2018-08-08'
    //    }
    // ); 
  }

  ngOnInit() {
    this.clientes = Array<Cliente>();
  }
}
