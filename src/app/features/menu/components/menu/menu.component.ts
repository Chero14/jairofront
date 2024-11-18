import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  constructor(private http: HttpClient, private router: Router) {}

  // Función para navegar a la página de detalles del personaje por ID
  fetchById() {
    const id = prompt('Ingresa el ID del personaje:');
    if (id) {
      this.router.navigate([`/caracteris`, id]);
    }
  }

  // Función para filtrar personajes
  filterCharacters() {
    const filter = prompt('Ingresa el filtro (ejemplo: name=Rick):');
    if (filter) {
      this.router.navigate(['/caracterlista'], { queryParams: { filter } });
    }
  }

  // Función para listar todos los personajes
  listAllCharacters() {
    this.router.navigate(['/caracterlistaall']);
  }
}
