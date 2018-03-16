import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared.module';

import { GlobalService } from './services/global.service';

import { MenuComponent } from './components/menu/menu.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PagesTopComponent } from './components/pages-top/pages-top.component';
import { NotificationComponent } from './components/notification/notification.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ContentTopComponent } from './components/content-top/content-top.component';
import { RightConfigComponent } from './components/right-config/right-config.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        SharedModule
    ],
    providers: [
        GlobalService
    ],
    declarations: [
        MenuComponent,
        SidebarComponent,
        PagesTopComponent,
        ContentTopComponent,
        NotificationComponent,
        RightConfigComponent,
        LoadingComponent
    ],
    exports: [
        SidebarComponent,
        PagesTopComponent,
        ContentTopComponent,
        NotificationComponent,
        RightConfigComponent,
        LoadingComponent
    ]
})
export class LayoutModule { }
