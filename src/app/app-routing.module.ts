import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardTransactionsComponent } from './Components/card-transactions/card-transactions.component';


const routes: Routes = [
  {
    path: '',
    component: CardTransactionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
