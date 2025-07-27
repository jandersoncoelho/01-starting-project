import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-server-status',
  imports: [],
  templateUrl: './dashboard-server-status.component.html',
  styleUrls: ['./dashboard-server-status.component.css']
})
export class DashboardServerStatusComponent {
  currentStatus: 'online' | 'offline' | 'unknown' = 'offline';
}
