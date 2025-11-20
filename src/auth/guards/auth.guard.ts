import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable({ providedIn: "root" })

// essa classe tem a autoridade de bloquear ou permitir a navegação
export class AuthGuard implements CanActivate {

    constructor(
        private auth: AuthService, // saber se o usuário está logado
        private router: Router // redirecionar o usuário
    ) {}

    // verificar se o usuário está logado -> se SIM, retorna true, se NÃO, é redirecionado a página principal
    canActivate(): boolean {
        if(!this.auth.isLogged()) {
            this.router.navigate(['/']);
            return false
        }

        return true
    }

}