import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { AuthService } from '../../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {
  loginForm: FormGroup; // onde vai guardar todas as informações inseridas no formulário
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  };

  onSubmit() {
    if(this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: (response) => {
          console.log('Login realizado com sucesso!', response);
          this.authService.setToken(response.token);
          this.loginForm.reset();
          this.router.navigate(['/dados/dados-pessoais'])
        },
        error: (err) => {
          console.log('Erro ao realizar o login', err);
          this.errorMessage = 'Login ou senha incorretos'
          this.loginForm.get('password')?.reset();
        }
      });
    } else {
      this.errorMessage = 'Preencha todos os campos corretamente'
    }
  }
}
