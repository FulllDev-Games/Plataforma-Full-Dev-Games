import { HttpClient } from "@angular/common/http";
import { Inject, Injectable, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";

import { LoginDTO } from "../models/login.dto";
import { ProfileDTO } from "../models/profile.dto";
import { RegisterDTO } from "../models/register.dto";

// qualquer lugar da aplicação pode acessar os métodos que serão criados nesse arquivo
@Injectable({ providedIn: 'root' })

export class AuthService {

    private API_URL = 'http://localhost:5091/api/Auth';

    // utilizando uma instância HttpClient para conseguirmos fazer as requisições GET, POST, DELETE, etc
    constructor(
        private http: HttpClient,
        @Inject(PLATFORM_ID) private platformId: Object // permite saber onde o código está rodando
    ) { }

    login(data: LoginDTO) {
        // envia os dados e indica o que será retornado para a aplicação
        return this.http.post<{ token: string, profile: ProfileDTO }>(
            // parâmetros sendo enviadas
            `${this.API_URL}/login`,
            data
        )
    };

    // registrando um usuário com base nos dados enviados 
    register(data: RegisterDTO) {
        return this.http.post(`${this.API_URL}/register`, data)
    };

    // obtendo informações do perfil do usuário
    getProfile() {
        return this.http.get<ProfileDTO>(`${this.API_URL}/me`)
    };

    setToken(token: string) {
        if (isPlatformBrowser(this.platformId)) {
            localStorage.setItem('token', token);
        }
    };

    getToken() {
        if (isPlatformBrowser(this.platformId)) {
            return localStorage.getItem('token')
        }
        return null;
    };

    logout() {
        if (isPlatformBrowser(this.platformId)) {
            localStorage.removeItem('token')
        }
    };

    isLogged() {
        return !!this.getToken();
    }
}