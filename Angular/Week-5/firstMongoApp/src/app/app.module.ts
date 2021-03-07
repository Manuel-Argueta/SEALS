import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { appRoutingModule } from './app-routing.module';
import { CreateJournalComponent } from './create-journal/create-journal.component';
import { DeleteJournalComponent } from './delete-journal/delete-journal.component';
import { AllJournalsComponent } from './all-journals/all-journals.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateJournalComponent,
    DeleteJournalComponent,
    AllJournalsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    appRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
