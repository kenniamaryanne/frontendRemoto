import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';

@Injectable()
export class NgrokInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const newReq = req.clone({
      headers: req.headers.set('ngrok-skip-browser-warning', 'seu_valor_aqui')
    });
    return next.handle(newReq);
  }
}