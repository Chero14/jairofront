import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Importa FormsModule

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule], // Agrega FormsModule aquí
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onLogin() {
    if (this.username === 'admin' && this.password === 'admin') {
      this.router.navigate(['/menu']); // Redirigir al menú principal
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }
}
