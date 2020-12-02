import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaMercadoriasComponent } from './lista-mercadorias/lista-mercadorias.component';
import { CadastroMercadoriaComponent } from './cadastro-mercadoria/cadastro-mercadoria.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MercadoriaService } from './mercadoria.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListaMercadoriasComponent,
    CadastroMercadoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [MercadoriaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
