import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SoundsListComponent } from '@features/sounds/components';

const routes: Routes = [
  { path: '', component: SoundsListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SoundsRoutingModule { }