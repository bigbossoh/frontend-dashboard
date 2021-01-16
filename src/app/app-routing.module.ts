import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { TicketComponent } from './metier/ticket/ticket.component';
import { ClientsocieteComponent } from './metier/clientsociete/clientsociete.component';
import { TableComponent } from './exemple/table/table.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [{
      path: '',
      component: DashboardComponent
    }, {
      path: 'posts',
      component: PostsComponent
    }, {
      path: 'tickets',
      component: TicketComponent
    }, {
      path: 'clientsociete',
      component: ClientsocieteComponent
    }, {
      path: 'tableexemple',
      component: TableComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
