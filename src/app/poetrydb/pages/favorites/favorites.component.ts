import { Component } from '@angular/core';
import { Title } from '../../interfaces/title.interface';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent {
  favorites: Title[] = [];
  

}
