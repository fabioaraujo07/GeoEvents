import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocalsDetailsComponent } from './locals-details/locals-details.component';
import { LocalsListComponent } from './locals-list/locals-list.component';
import { EventsDetailsComponent } from './events-details/events-details.component';

const routes: Routes = [
  {
    path: 'local/:id',
    component : LocalsDetailsComponent
  },
  {
    path: 'locals',
    component : LocalsListComponent
  },
  {
    path: 'event/:id',
    component : EventsDetailsComponent
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
