import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Local } from './model/local';
import { Event } from './model/event';
import { Ticket } from './model/ticket';

const endpoint = 'http://localhost:3000/api/v1/'
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  getLocals(): Observable<Local[]> {
    return this.http.get<Local[]>(endpoint + 'locals')
  }

  getEvents(): Observable<Event[]>{
    return this.http.get<Event[]>(endpoint + 'events')
  }

  getTickets(): Observable<Ticket[]>{
    return this.http.get<Ticket[]>(endpoint + 'tickets')
  }
  
  getLocal(id:String):Observable<Local>{
    return this.http.get<Local>(endpoint + 'local/' + id)
  }

  getEvent(id:String): Observable<Event>{
    return this.http.get<Event>(endpoint + 'event/' + id)
  }
}
