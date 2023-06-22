import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Cmp1Component } from './cmp1/cmp1.component';
import { Cmp2Component } from './cmp2/cmp2.component';
import { Cmp3Component } from './cmp3/cmp3.component';

const routes: Routes = [
  {path:'cmp1', component:Cmp1Component},
  {path:'cmp2', component:Cmp2Component},
  {path:'cmp3', component:Cmp3Component},
  {path:'**', redirectTo: 'cmp1'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
