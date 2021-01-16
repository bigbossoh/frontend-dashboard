import { Component, OnInit, inject, Inject } from '@angular/core';
import { HostserviceService } from 'src/app/services/hostservice.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DonneeSocieteCliente } from '../clientsociete.component';
import {formatDate} from '@angular/common';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';



@Component({
  selector: 'app-ajoutticket',
  templateUrl: './ajoutticket.component.html',
  styleUrls: ['./ajoutticket.component.scss']
})


export class AjoutticketComponent implements OnInit {

  dateDemane = new Date();
  day = new Date(this.dateDemane).getDate();
 monthIndex = new Date(this.dateDemane).getMonth();
 year = new Date(this.dateDemane).getFullYear();

  constructor(private host: HostserviceService, private datepipe: DatePipe, public dialogRef: MatDialogRef<AjoutticketComponent>,
              @Inject(MAT_DIALOG_DATA)public data: DonneeSocieteCliente, private router: Router) {

  }

  ngOnInit(): void {

  }

// tslint:disable-next-line: typedef
onCreerTicket(formData){

formData.dateDemandeTicket = formatDate(new Date(), 'dd-MM-yyyy', 'en');
formData.dateProgrammer = formatDate(formData.dateProgrammer, 'dd-MM-yyyy', 'en');
formData.heureDemande = this.dateDemane.getHours() + ':' + this.dateDemane.getMinutes();
// tslint:disable-next-line: max-line-length
console.log('Date et heure ', formData.dateDemandeTicket, '*****', formData.heureDemande, '****', formData.clientSoc, '----', formatDate(new Date(), 'yyyy-MM-dd', 'en')
, 'oooo', formData.dateProgrammer, ' Date Programmee');
this.host.postCreerTicket(formData)
    .subscribe(
      data => {
        alert('Ajout du ticket avec succès !');
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate(['/clientsociete']);
      },
      err => {
        console.log(err);
      }
    );

}
}
