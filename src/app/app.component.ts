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
import { ToastrService } from 'ngx-toastr';

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
    treeMenu: Array<MenuItemModel> = [];

    constructor(
        private router: Router,
        private breakpointObserver: BreakpointObserver,
        private appService: AppService,
        private toastr: ToastrService
    ) {
        this.initializeAsyncProperties();
    }

    async initializeAsyncProperties() {
        await this.getProfile();
        await this.getMenus();
        await this.getLanguages();
        await this.getEntities();
        await this.getNotification();
        await this.getDefaultLanguage();
    }

    onChangeEntity(event: TenantModel) {
        console.log('action changeTenant!', event);
        this.currentTenant = { ...event };
    }
    onClickLanguage(event: any) {
        console.log('action clickLanguage!', event);
        this.selectedLanguage = event;
    }
    onClickMenu(event: any) {
        // console.log('action clickMenu!');
        // console.log('this.goTo', event.target);
        this.router.navigate([event.target]);
        // this.goTo([event.target]);
    }
    onClickFavorite(event: any) {
        console.log('action clickFavorite!', event);
    }
    onAllEntities(event: any) {
        console.log('action AllEntitites!', event);
    }
    onAllNotification(event: any) {
        console.log('action AllNotification!', event);
    }
    onClickNotification(event: any) {
        console.log('action clickNotification!', event);
    }
    onClickAccount(event: any) {
        console.log('action clickAccount!', event);
    }
    onClickSignOut(event: any) {
        console.log('action clickSignOut!', event);
    }

    async getLanguages() {
        this.languages = await this.appService.getLanguages();
    }

    async getMenus(id?: number) {
        let Id = id;
        let items = await this.appService.getMenus();
        // this.menus = items.filter(function(item) { return item.parentId == this.Id; }, this);
        this.menus = items.filter(item => item.parentId == id);

        this.treeMenu = items.filter(item => {
            item.children = items.filter(it => it.parentId == item.id);
            return !item.parentId;
        });

        console.log(this.treeMenu);
    }

    async getProfile() {
        this.profile = await this.appService.getProfile();
    }

    async getEntities() {
        this.tenants = await this.appService.getTenants();
        this.currentTenant = this.tenants[0];
    }

    async getNotification() {
        this.notifications = await this.appService.getNotifications();
    }

    async getDefaultLanguage() {
        this.selectedLanguage = await this.languages.find(
            l => l.code == 'pt-BR'
        );
    }

    showSuccess() {
        this.toastr.success('Hello world!', 'Toastr fun!');
    }

    goto(router: Array<any>) {
        this.router.navigate(router);
    }
}

