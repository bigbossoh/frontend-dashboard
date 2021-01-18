import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from 'src/app/layouts/default/default.module';
import { RouterModule } from '@angular/router';
import { TicketComponent } from './metier/ticket/ticket.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ClientsocieteComponent } from './metier/clientsociete/clientsociete.component';
import { TableComponent } from './exemple/table/table.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { A11yModule } from '@angular/cdk/a11y';
import { CdkTableModule } from '@angular/cdk/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { PortalModule } from '@angular/cdk/portal';
import { AjoutticketComponent } from './metier/clientsociete/ajoutticket/ajoutticket.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { DatePipe } from '@angular/common';

import { MiseticketComponent } from './metier/clientsociete/miseticket/miseticket.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketComponent,
    ClientsocieteComponent,
    TableComponent,
    AjoutticketComponent,
    MiseticketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    RouterModule,
    HttpClientModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSortModule,
    MatInputModule,
    A11yModule,
    CdkTableModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatRippleModule,
    MatSidenavModule,
    MatSortModule,
    MatTableModule,
    PortalModule,
    ScrollingModule,
    MatBadgeModule,
    MatDatepickerModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSnackBarModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatNativeDateModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaterialTimepickerModule
  ],

  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' }, DatePipe],
  bootstrap: [AppComponent],
  entryComponents: [AjoutticketComponent]
})
export class AppModule { }
