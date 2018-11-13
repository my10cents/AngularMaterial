import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { TreeViewComponent } from './tree-view.component';
import { MaterialModule } from '../../material.module';
import { MatIconModule, MatSidenavModule, MatListModule, MatToolbarModule, MatButtonModule } from '@angular/material';

const sharedComponents = [TreeViewComponent];

@NgModule({
    imports: [CommonModule, SharedRoutingModule, MaterialModule],
    declarations: [sharedComponents],
    exports: [sharedComponents]
})
export class SharedModule {}
