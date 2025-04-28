import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//I use redirection while there are no additional modules
const routes: Routes = [
  { path: '',
    loadChildren: () => import('./features/sounds/sounds.module').then(m => m.SoundsModule)
   },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
