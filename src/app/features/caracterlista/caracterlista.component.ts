import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-caracterlista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './caracterlista.component.html',
  styleUrls: ['./caracterlista.component.css'],
})
export class CaracterListaComponent implements OnInit {
  characters: any[] = [];
  isLoading: boolean = false;
  errorMessage: string = '';

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const filter = params['filter'];
      if (filter) {
        this.fetchFilteredCharacters(filter);
      }
    });
  }

  fetchFilteredCharacters(name: string) {
    this.isLoading = true;
    this.errorMessage = '';
    this.http.get<any[]>(`http://localhost:8010/api/characters/filter?name=${name}`).subscribe(
      (data) => {
        this.characters = data;
        this.isLoading = false;
      },
      (error) => {
        this.errorMessage = 'Error al cargar los personajes.';
        console.error(error);
        this.isLoading = false;
      }
    );
  }

  goBack() {
    this.router.navigate(['/menu']); // Navega al menú principal
  }
}
