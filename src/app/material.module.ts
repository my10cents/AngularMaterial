import { NgModule } from '@angular/core';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

const materialModules = [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
];

@NgModule({
    imports: [
        materialModules
    ],
    exports: [
        materialModules
    ],
    declarations: []
})
export class MaterialModule { }
