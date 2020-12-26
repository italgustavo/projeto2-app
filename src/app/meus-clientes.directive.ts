import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { Cliente } from './cliente';

@Directive({
  selector: '[appMeusClientes]'
})
export class MeusClientesDirective {

  private _appMeusClientes:Cliente;


  constructor(private el:ElementRef) { 
    this.el.nativeElement.innerHtml += 'conteudo adicionado';
  }

  get appMeusClientes(){
    return this._appMeusClientes;
  }

  @Input()
  set appMeusClientes(valor:Cliente){
    this._appMeusClientes = valor;
    this.changeColorCliente();
  }


   @HostListener('click')
   onClick(){
     alert(this.appMeusClientes)
   }

   changeColorCliente(){
     this.el.nativeElement.style.color = this.appMeusClientes.valor > 30 ?  'green' : 'red'
   }

}
