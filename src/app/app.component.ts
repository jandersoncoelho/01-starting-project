import { Component } from '@angular/core';

import { HeaderComponent } from './components/header/header.component';
import { DashboardServerStatusComponent } from './components/dashboard-server-status/dashboard-server-status.component';
import { DashboardTicketsComponent } from './components/dashboard-tickets/dashboard-tickets.component';
import { DashboardTraficComponent } from './components/dashboard-trafic/dashboard-trafic.component';
import { DashboardItemComponent } from "./components/dashboard-item/dashboard-item.component";

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
