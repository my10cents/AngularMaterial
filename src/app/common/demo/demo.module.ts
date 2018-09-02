import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatInputModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatTabsModule,
    MatDividerModule,
    MatListModule,
    MatStepperModule,
    MatAutocompleteModule
} from '@angular/material';

import { LayoutModule } from '@angular/cdk/layout';
import { DemoRoutingModule } from './demo-routing.module';
import { AutocompleteDemoComponent } from './autocomplete-demo/autocomplete-demo.component';
import { ButtonDemoComponent } from './button-demo/button-demo.component';
import { CardDemoComponent } from './card-demo/card-demo.component';
import { DashboardDemoComponent } from './dashboard-demo/dashboard-demo.component';
import { GridListDemoComponent } from './grid-list-demo/grid-list-demo.component';
import { HomeDemoComponent } from './home-demo/home-demo.component';
import { ProgressBarDemoComponent } from './progress-bar-demo/progress-bar-demo.component';
import { TableBasicDemoComponent } from './table-basic-demo/table-basic-demo.component';
import { ToastyDemoComponent } from './toasty-demo/toasty-demo.component';
import { CardGridDemoComponent } from './card-grid-demo/card-grid-demo.component';
import { TabDemoComponent } from './tab-demo/tab-demo.component';
import { StepDemoComponent } from './step-demo/step-demo.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        DemoRoutingModule,

        LayoutModule,
        MatButtonModule,
        MatCardModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatRadioModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        MatDividerModule,
        MatListModule,
        MatStepperModule,
        MatAutocompleteModule
        //MatFormGroupModule

    ],
    declarations: [
        AutocompleteDemoComponent,
        ButtonDemoComponent,
        CardDemoComponent,
        DashboardDemoComponent,
        GridListDemoComponent,
        HomeDemoComponent,
        ProgressBarDemoComponent,
        TableBasicDemoComponent,
        ToastyDemoComponent,
        CardGridDemoComponent,
        TabDemoComponent,
        StepDemoComponent
    ]
})
export class DemoModule {}
