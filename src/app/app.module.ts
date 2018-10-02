import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { AdminModule } from './modules/admin/admin.module';
import { ManagerModule } from './modules/manager/manager.module';
import { ProductModule } from './modules/product/product.module';
import { AppService } from './app.service';

import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { TreeViewComponent } from './common/components/tree-view.component';
import { PageNotFoundComponent } from './common/components/page-not-found/page-not-found.component';
import { SharedModule } from './common/components/shared.module';
import { MaterialModule } from './material.module';

export function initializeApp(appService: AppService) {
    return async () => await appService.loadConfig();
}

@NgModule({
    declarations: [AppComponent, PageNotFoundComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ToastrModule.forRoot(),
        LayoutModule,
        MaterialModule,
        SharedModule,
        AdminModule,
        ManagerModule,
        ProductModule
    ],
    providers: [
        AppService,
        {
            provide: APP_INITIALIZER,
            useFactory: initializeApp,
            deps: [AppService],
            multi: true
        } //,
        // {
        //     provide: HTTP_INTERCEPTORS,
        //     useClass: MessagesHttpInterceptor,
        //     multi: true
        // },
        // {
        //     provide: LOCALE_ID,
        //     useValue: 'pt-BR'
        // }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
