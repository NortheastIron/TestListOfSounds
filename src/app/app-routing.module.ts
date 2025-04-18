import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoundsPageComponent } from './pages/sounds-page/sounds-page.component';

const routes: Routes = [
  { path: '', component: SoundsPageComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
