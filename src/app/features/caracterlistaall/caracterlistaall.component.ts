import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-caracterlistaall',
  standalone: true,
  imports: [CommonModule],  // Asegúrate de que CommonModule esté en imports
  templateUrl: './caracterlistaall.component.html',
  styleUrls: ['./caracterlistaall.component.css'],
})
export class CaracterlistaallComponent implements OnInit {
  characters: any[] = [];
  isLoading: boolean = false;
  errorMessage: string = '';

  constructor(private http: HttpClient,  private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.fetchAllCharacters();
  }

  fetchAllCharacters(): void {
    this.isLoading = true;
    this.errorMessage = '';
    this.http.get<any[]>('http://localhost:8010/api/characters/api').subscribe(
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
