import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorsComponent } from './pages/authors/authors.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';

const routes: Routes = [
  {
    path: '',
    children: 
    [
      {
        path:'authors',
        title:'Authors',
        component: AuthorsComponent,
      },
      {
        path:'favorites',
        title:'Favorites',
        component: FavoritesComponent,
      },
      {
        path:'**',
        redirectTo:'authors'
      },
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PoetrydbRoutingModule { }
