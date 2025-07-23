import { Component } from '@angular/core';

@Component({
  selector: 'app-dash-board-server-status',
  imports: [],
  templateUrl: './dash-board-server-status.component.html',
  styleUrls: ['./dash-board-server-status.component.css']
})
export class DashBoardServerStatusComponent {
  currentStatus: 'online' | 'offline' | 'unknown' = 'offline';
}
