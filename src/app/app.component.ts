import { Component } from '@angular/core';

import { HeaderComponent } from './components/header/header.component';
import { DashboardServerStatusComponent } from './dashboards/dashboard-server-status/dashboard-server-status.component';
import { DashboardTicketsComponent } from './dashboards/dashboard-tickets/dashboard-tickets.component';
import { DashboardTraficComponent } from './dashboards/dashboard-trafic/dashboard-trafic.component';
import { DashboardItemComponent } from "./dashboards/dashboard-item/dashboard-item.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    DashboardServerStatusComponent,
    DashboardTraficComponent,
    DashboardTicketsComponent,
    DashboardItemComponent
],
})
export class AppComponent {}
