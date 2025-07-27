import { Component } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";

@Component({
  selector: 'app-dashboard-tickets',
  imports: [NewTicketComponent],
  templateUrl: './dashboard-tickets.component.html',
  styleUrls: ['./dashboard-tickets.component.css']
})
export class DashboardTicketsComponent {

}
