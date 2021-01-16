import { Component, OnInit, ViewChild, ViewChildren, QueryList, ChangeDetectorRef } from '@angular/core';
import { HostserviceService } from 'src/app/services/hostservice.service';
import { ClientSocieteClasse } from '../classes/clientsocieteclasse';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { TicketClasse } from '../classes/ticketclasse';
import { MatDialog } from '@angular/material/dialog';
import { AjoutticketComponent } from './ajoutticket/ajoutticket.component';

export interface DonneeSocieteCliente {
  idClientSociete: number;
}
@Component({
  selector: 'app-clientsociete',
  templateUrl: './clientsociete.component.html',
  styleUrls: ['./clientsociete.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})

export class ClientsocieteComponent implements OnInit {
  @ViewChild('outerSort', { static: true }) sort: MatSort;
  @ViewChildren('innerSort') innerSort: QueryList<MatSort>;
  @ViewChildren('innerTables') innerTables: QueryList<MatTable<TicketClasse>>;
 
  dataSource: ClientSocieteClasse;
  clientSocieteData: ClientSocieteClasse = new ClientSocieteClasse();
  columnsToDisplay = ['ouvrir', 'id', 'nomSoc', 'telSoc', 'emailSoc', 'action'];
  displayedColumns: string[] = ['id', 'dateDemandeTicket', 'heureDemande', 'enAttente'];
  expandedElement: ClientSocieteClasse | null;
 idClientSociete: number;
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
  // clientSociete: ClientSocieteClasse[];
  constructor(public serviceceHost: HostserviceService, private cd: ChangeDetectorRef, public dial: MatDialog) { }

  ngOnInit(): void {
    this.getClient();

  }
  openTicketDialogue(item: any): void {
    console.log("Id de la ligne selectionnee", item.id);
   this.idClientSociete=item.id
    const dailogRef = this.dial.open(AjoutticketComponent,
      {
        width: '300px', disableClose: false,
        data: { id: this.idClientSociete }
      });
  }



  // tslint:disable-next-line: typedef
  getClient() {
    return this.serviceceHost.getListeClienSocietes()
      .subscribe(data => {
        this.dataSource = data;
        console.log('Source de donnees ', this.dataSource);
      }, err => {
        console.log(err);
      });
  }
}
