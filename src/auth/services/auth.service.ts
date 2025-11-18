import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { LoginDTO } from "../models/login.dto";
import { ProfileDTO } from "../models/profile.dto";
import { RegisterDTO } from "../models/register.dto";

// qualquer lugar da aplicação pode acessar os métodos que serão criados nesse arquivo
@Injectable({ providedIn: 'root' })
    
export class AuthService {
    private API_URL = 'http://localhost:5091/api/Auth';

    // utilizando uma instância HttpClient para conseguirmos fazer as requisições GET, POST, DELETE, etc
    constructor(private http: HttpClient) { }

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
        localStorage.setItem('token', token)
    };

    getToken() {
        return localStorage.getItem('token')
    };

    logout() {
        localStorage.removeItem('token')
    };

    isLogged() {
        return !!this.getToken();
    }
}