import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { AuthService } from "../services/auth.service";
import { Observable } from "rxjs";

@Injectable()

// faz com que o Angular "conheça" esse código como interceptor
// INTERCEPTOR = nos permite interceptar, tratar e gerenciar requisições http antes delas serem enviadas ao servidor
export class AuthInterceptor implements HttpInterceptor {

    // injeta o AuthService, para que possamos usar o token
    constructor(private auth: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // resposta a ser enviada ao servidor

        // obtém o token do localStorage
        const token = this.auth.getToken();

        // verifica se o token existe
        if(token) {
            const cloned = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
            return next.handle(cloned)
        };

        return next.handle(req);
    }

}