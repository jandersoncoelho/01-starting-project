import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-trafic',
  imports: [],
  templateUrl: './dashboard-trafic.component.html',
  styleUrls: ['./dashboard-trafic.component.css']
})
export class DashboardTraficComponent {
  dummyTrafficData = [
    {
      id: 'd1',
      value: 433,
    },
    {
      id: 'd2',
      value: 260,
    },
    {
      id: 'd3',
      value: 290,
    },
    {
      id: 'd4',
      value: 410,
    },
    {
      id: 'd5',
      value: 397,
    },
    {
      id: 'd6',
      value: 488,
    },
    {
      id: 'd47',
      value: 589,
    },
  ];

  maxTraffic: number = 0; // Initialize with a default value

  constructor() {
    this.maxTraffic = Math.max(
      ...this.dummyTrafficData.map((data: any) => data.value)
    );
  }
}
