import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-locals-list',
  templateUrl: './locals-list.component.html',
  styleUrls: ['./locals-list.component.css']
})
export class LocalsListComponent implements OnInit {
  locals: any = [];
  rest: RestService;

  constructor(rest:RestService, private route: ActivatedRoute, private router: Router){
    this.rest = rest;
  }

  ngOnInit(): void {
      this.getLocals();
  }

  getLocals() {
    this.locals = [];
    this.rest.getLocals().subscribe((data: {})=> { 
      console.log(data);
      this.locals = data;
    })
  }

}
