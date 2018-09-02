import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagerHomeComponent } from './manager-home/manager-home.component';

const routes: Routes = [
    { path: '', component: ManagerHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
