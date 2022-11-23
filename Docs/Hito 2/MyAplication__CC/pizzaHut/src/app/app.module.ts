import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteComponent } from './cliente/cliente.component';
import { PedidoComponent } from './pedido/pedido.component';
import { ProductPizzaComponent } from './product-pizza/product-pizza.component';
import { UserComponent } from './user/user.component';
import { AdmSistemaComponent } from './adm-sistema/adm-sistema.component';
import { GerenteComponent } from './gerente/gerente.component';
import { GerClienComponent } from './ger-clien/ger-clien.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    PedidoComponent,
    ProductPizzaComponent,
    UserComponent,
    AdmSistemaComponent,
    GerenteComponent,
    GerClienComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
