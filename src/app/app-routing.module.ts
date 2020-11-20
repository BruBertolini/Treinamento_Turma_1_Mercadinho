import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroMercadoriaComponent } from './cadastro-mercadoria/cadastro-mercadoria.component';
import { ListaMercadoriasComponent } from './lista-mercadorias/lista-mercadorias.component';

const routes: Routes = [
  { path:'' , component: ListaMercadoriasComponent },
  { path:'cadastro' , component: CadastroMercadoriaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
