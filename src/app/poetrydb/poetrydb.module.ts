import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { AuthorsComponent } from './pages/authors/authors.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PoetrydbRoutingModule } from './poetrydb-routing.module';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    SideBarComponent,
    AuthorsComponent,
    FavoritesComponent,
    NavBarComponent
  ],
  exports: [
    SideBarComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    PoetrydbRoutingModule,
    HttpClientModule,
    RouterModule,
    MatPaginatorModule, 
    MatTableModule
  ]
})
export class PoetrydbModule { }
