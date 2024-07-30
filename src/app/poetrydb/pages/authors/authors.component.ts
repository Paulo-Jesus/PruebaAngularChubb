import { AfterViewInit, Component, OnInit } from '@angular/core';
import { PoetrydbServiceService } from '../../services/poetrydb-service.service';
import { Authors } from '../../interfaces/authors.interface';
import { Title } from '../../interfaces/title.interface';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrl: './authors.component.css',
})
export class AuthorsComponent implements OnInit {
  constructor(private poetrydbService: PoetrydbServiceService) {}

  authors: Authors = { authors: [] };

  author!: string;
  titles: Title[] = [];
  favorites: Title[] = [];

  ngOnInit(): void {
    this.getAuthors();
  }

  getAuthors() {
    this.poetrydbService.getAuthors().subscribe({
      next: (authors) => {
        this.authors = authors;
      },
      error: (error) => {
        console.log('Error:', error);
      },
    });
  }

  getTitlesByAuthor(author: string) {
    this.poetrydbService.getTitlesByAuthor(author).subscribe({
      next: (titles) => {
        this.author = author;
        this.titles = titles;

        console.log(titles);
      },
      error: (error) => {
        console.log('Error:', error);
      },
    });
  }

  editFavorites(i: number): string{
    if(this.favorites.includes(this.titles[i]))
      {
        this.favorites.slice(i, 1);
        localStorage.setItem('favorites', JSON.stringify( this.favorites ));
        this.poetrydbService.editFavorites(this.favorites);
        return 'Title Removed';
      }
      else 
      {
        this.favorites.push(this.titles[i]);
        localStorage.setItem('favorites', JSON.stringify( this.favorites ));
        this.poetrydbService.editFavorites(this.favorites);
        return 'Title added.';
      }
  }
}
