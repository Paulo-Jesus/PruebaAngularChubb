import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'poetrydb',
    loadChildren: () => import('./poetrydb/poetrydb.module').then((m) => m.PoetrydbModule),
  },
  {
    path:'**',
    redirectTo:'poetrydb',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
