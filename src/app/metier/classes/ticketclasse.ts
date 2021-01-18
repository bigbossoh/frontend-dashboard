import { ClientSocieteClasse } from '../classes/clientsocieteclasse';
export class TicketClasse {
    id: number;
	 // tslint:disable-next-line: indent
	 dateDemandeTicket: Date;
	heureDemande: Date;
	dateProgrammer: Date;
	descSuscinte: string;
	cloture: boolean;
	 archiver: boolean;
	enAttente: boolean;
	heureProgrammer: Date;
	clientSoc: ClientSocieteClasse;
}