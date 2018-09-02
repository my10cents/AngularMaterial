import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AppService } from './app.service';
import { ProfileModel } from './common/models/profile.model';
import { environment } from '../environments/environment';
import { TenantModel } from './common/models/tenant.model';
import { NotificationModel } from './common/models/notification.model';
import { LanguageModel } from './common/models/language.model';
import { MenuItemModel } from './common/models/menu-item.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    isHandset$: Observable<boolean> = this.breakpointObserver
        .observe(Breakpoints.Handset)
        .pipe(map(result => result.matches));

        appVersion: string = environment.version;
        profile: ProfileModel = new ProfileModel();
        tenants: Array<TenantModel> = [];
        currentTenant: TenantModel = new TenantModel();

        notifications: Array<NotificationModel> = [];

        languages: Array<LanguageModel> = [];
        selectedLanguage: LanguageModel;

        loadingMenu: boolean = false;
        menus: Array<MenuItemModel> = [];



    constructor(
        private router: Router,
        private breakpointObserver: BreakpointObserver,
        private appService: AppService
    ) {

    }

    goto(router: Array<any>) {
        this.router.navigate(router);
    }
}
