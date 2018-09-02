import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path: 'admin',
        loadChildren: './modules/admin/admin.module#AdminModule'
    },
    {
        path: 'manager',
        loadChildren: './modules/manager/manager.module#ManagerModule'
    },
    {
        path: 'product',
        loadChildren: './modules/reembolso/reembolso.module#ReembolsoModule'
    },
    {
        path: 'demo',
        loadChildren: './common/demo/demo.module#DemoModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
