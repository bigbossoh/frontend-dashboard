import { MatTableDataSource } from '@angular/material/table';
import { TicketClasse } from './ticketclasse';

export class ClientSocieteClasse {
    id: number;
	 // tslint:disable-next-line: indent
	 nomSoc: string;
	 telSoc: string;
	 emailSoc: string;
	 sousContratSoc: boolean;
	 lieuSoc: string;
	 tickets?: MatTableDataSource<TicketClasse>
}