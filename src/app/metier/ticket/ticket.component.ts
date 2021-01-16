import { Component, OnInit } from '@angular/core';
import {HostserviceService} from '../../services/hostservice.service'
import { TicketClasse } from '../classes/ticketclasse';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {
public tickets;
public listTickets:TicketClasse[];
constructor(public hostservice:HostserviceService) { }

  ngOnInit(): void {
  this.getTickets('/tickets')
  this.getListTicke();
  }
getListTicke() {
    this.hostservice.getListeTickets()
    .subscribe(data=>{
this.listTickets=data;
console.log("Les tickets",this.listTickets)
    },err=>{
         console.log(err)
       })
  }


private getTickets(url){
 this.hostservice.getResource(url).subscribe(
   data=>{
     this.tickets=data
     this.tickets._embedded.tickets.forEach(ticket => {
       this.hostservice.getTicketProjections(ticket).subscribe(data=>{
         this.tickets.projection=data
         console.log("Nouveau ticket ",this.tickets)
       },err=>{
         console.log(err)
       })
     });
   },err=>{
     console.log(err)
   }
 )
}
}
