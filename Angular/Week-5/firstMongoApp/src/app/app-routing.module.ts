import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {CreateJournalComponent} from './create-journal/create-journal.component';
import {DeleteJournalComponent} from './delete-journal/delete-journal.component';
import { AllJournalsComponent } from './all-journals/all-journals.component';
const routes: Routes = [
  {path: 'all-journals', component: AllJournalsComponent},
  {path:'create', component: CreateJournalComponent},
  {path: 'delete', component: DeleteJournalComponent},

  {path:'**', redirectTo: 'all-journals' }
];

export const appRoutingModule = RouterModule.forRoot(routes);


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
