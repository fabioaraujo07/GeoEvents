import { Component, OnInit } from '@angular/core';
import { Event } from '../model/event';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-events-details',
  templateUrl: './events-details.component.html',
  styleUrls: ['./events-details.component.css']
})
export class EventsDetailsComponent implements OnInit {
  event: any;
  tickets: any;

  constructor(public rest:RestService ,private route: ActivatedRoute, private router: Router){
  }

  ngOnInit(): void {
    var idTemp = this.route.snapshot.params['id'];
    this.rest.getEvent(idTemp).subscribe((data: Event) =>{
      this.event = data;
    })
    this.getTickets();
  }

  getTickets() {
    this.tickets = [];
    this.rest.getTickets().subscribe((data: {})=> {
      console.log(data);
      this.tickets = data;
    })
  }

}
