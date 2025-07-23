import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { DashBoardServerStatusComponent } from './components/dash-board-server-status/dash-board-server-status.component';
import { DashBoardTraficComponent } from './components/dash-board-trafic/dash-board-trafic.component';
import { DashBoardTicketsComponent } from './components/dash-board-tickets/dash-board-tickets.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    DashBoardServerStatusComponent,
    DashBoardTraficComponent,
    DashBoardTicketsComponent,
  ],
})
export class AppComponent {}
