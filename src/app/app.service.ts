import { Injectable } from '@angular/core';
import { ProfileModel } from './common/models/profile.model';
import { TenantModel } from './common/models/tenant.model';
import { LanguageModel } from './common/models/language.model';
import { MenuItemModel } from './common/models/menu-item.model';
import { NotificationModel } from './common/models/notification.model';
import { ConfigurationModel } from './common/models/configuration.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    public loading: boolean = false;

    private _config: ConfigurationModel | any = null;

    constructor(private httpClient: HttpClient) {}

    public getConfig(key: any) {
        return key ? this._config[key] : this._config;
    }

    async loadConfig() {
        return new Promise<void>((resolve, reject) => {
            this.httpClient
                .get<ConfigurationModel>('appsettings.json')
                .toPromise()
                .then(res => {
                    this._config = res;
                    resolve();
                })
                .catch((response: any) => {
                    reject(
                        `Could not load file 'appsettings.json': ${JSON.stringify(
                            response
                        )}`
                    );
                });
        });
    }

    getProfile() {
        return this.httpClient
            .get<ProfileModel>('../assets/data/profile.json')
            .toPromise();
    }

    getTenants() {
        return this.httpClient
            .get<TenantModel[]>('../assets/data/entities.json')
            .toPromise();
    }

    getLanguages() {
        return this.httpClient
            .get<LanguageModel[]>('../assets/data/languages.json')
            .toPromise();
    }

    getMenus() {
        return this.httpClient
            .get<MenuItemModel[]>('../assets/data/menu.json')
            .toPromise();
    }

    getNotifications() {
        return this.httpClient
            .get<NotificationModel[]>('../assets/data/notifications.json')
            .toPromise();
    }
}
