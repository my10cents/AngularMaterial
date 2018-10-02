import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './common/components/page-not-found/page-not-found.component';

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
        loadChildren: './modules/product/product.module#ProductModule'
    },
    {
        path: 'demo',
        loadChildren: './common/demo/demo.module#DemoModule'
    },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
