import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Import Router
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-caracteris',
  standalone: true,
  imports: [CommonModule], // Import RouterModule
  templateUrl: './caracteris.component.html',
  styleUrls: ['./caracteris.component.css'],
})
export class CaracterisComponent implements OnInit {
  character: any;

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {} // Inject Router

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.http.get(`http://localhost:8010/api/characters/${id}`).subscribe(
        (data) => (this.character = data),
        (error) => console.error('Error al obtener el personaje:', error)
      );
    }
  }

  goBack() {
    this.router.navigate(['/menu']); // Navega al menú principal
  }
}