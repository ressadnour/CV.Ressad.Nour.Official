import { MaterialComponent } from './material.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes = [
  {
    path: '', component: MaterialComponent , pathMatch: 'full'
  }];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialRoutingModule { }
