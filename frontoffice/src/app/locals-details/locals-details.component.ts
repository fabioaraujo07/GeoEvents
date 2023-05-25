import { Component, OnInit } from '@angular/core';
import { Local } from '../model/local';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-locals-details',
  templateUrl: './locals-details.component.html',
  styleUrls: ['./locals-details.component.css']
})
export class LocalsDetailsComponent implements OnInit {
  local: any;
  events: any;

  constructor(public rest:RestService ,private route: ActivatedRoute, private router: Router){
  }

  ngOnInit(): void {
      var idTemp = this.route.snapshot.params['id'];
      this.rest.getLocal(idTemp).subscribe((data: Local) =>{
        this.local = data;
      })
      this.getEvents();
    }
  
    getEvents() {
      this.events = [];
      this.rest.getEvents().subscribe((data: {})=> { 
        console.log(data);
        this.events = data;
      })
    }
} 
