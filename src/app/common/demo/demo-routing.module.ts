import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardDemoComponent } from './dashboard-demo/dashboard-demo.component';
import { HomeDemoComponent } from './home-demo/home-demo.component';
import { TableBasicDemoComponent } from './table-basic-demo/table-basic-demo.component';
import { CardDemoComponent } from './card-demo/card-demo.component';
import { ButtonDemoComponent } from './button-demo/button-demo.component';
import { CardGridDemoComponent } from './card-grid-demo/card-grid-demo.component';
import { TabDemoComponent } from './tab-demo/tab-demo.component';
import { StepDemoComponent } from './step-demo/step-demo.component';
import { AutocompleteDemoComponent } from './autocomplete-demo/autocomplete-demo.component';

const routes: Routes = [
    { path: 'autocomplete', component: AutocompleteDemoComponent },
    { path: 'button', component: ButtonDemoComponent },
    { path: 'home', component: HomeDemoComponent },
    { path: 'dashboard', component: DashboardDemoComponent },
    { path: 'table', component: TableBasicDemoComponent },
    { path: 'cards', component: CardDemoComponent },
    { path: 'cards-grid', component: CardGridDemoComponent },
    { path: 'tabs', component: TabDemoComponent },
    { path: 'steps', component: StepDemoComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DemoRoutingModule {}
