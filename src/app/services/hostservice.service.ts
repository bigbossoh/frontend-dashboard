import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClientSocieteClasse } from '../metier/classes/clientsocieteclasse';
import { TicketClasse } from '../metier/classes/ticketclasse';

@Injectable({
  providedIn: 'root'
})
export class HostserviceService {
  constructor(private http: HttpClient) { }

  public host = 'http://localhost:8183';

// tslint:disable-next-line: typedef
  getTicketProjections(tick): Observable<TicketClasse[]>{
    let url = tick._links.ticket.href.replace('{?projection}', '');
    return this.http.get<TicketClasse[]>(url + '?projection=p1');
  }
  getListeTickets(): Observable<TicketClasse[]>{

  return this.http.get<TicketClasse[]>(this.host + '/api/v1/listDesTickets');
}
supprTicket(id): Observable<any>{
  return this.http.delete(this.host + '/api/v1/deleteTicket/' + id, {responseType: 'text'});
}
  getListeClienSocietes(): Observable<ClientSocieteClasse>{

  return this.http.get<ClientSocieteClasse>(this.host + '/api/v1/listClientSocie');
}
  // tslint:disable-next-line: typedef
  public getResource(ur): Observable<any>{
    return this.http.get(this.host + ur);
  }
  postCreerTicket(dataform){
    return this.http.post(this.host + '/api/v1/creerTicket', dataform);
  }
}
