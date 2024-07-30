import { Component } from '@angular/core';
import { PoetrydbServiceService } from '../../services/poetrydb-service.service';
import { Title } from '../../interfaces/title.interface';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
  constructor(private poetrydbService : PoetrydbServiceService){}

  titles: Title[] = [];

  ngOnInit(): void {
    this.getRandomTitles();
  }

  getRandomTitles()
  {
    this.poetrydbService.getRandomTitles().subscribe({
      next: (titles) => {
        this.titles = titles;
      },
      error: (error) => {
        this.titles = [];
        console.log('Error:', error);
      },
    });
  }
}
