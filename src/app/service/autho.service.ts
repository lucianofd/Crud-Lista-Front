import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDTO } from '../models/jwt-dto';
import { LoginUsuario } from '../models/login-usuario';
import { NuevoUsuario } from '../models/nuevo-usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthoService {

  
  //traigo los valoress del back

  authURL = 'http://localhost:8080/auth';

  constructor( private httpClient: HttpClient) { }
  
  //pos<any> como se definio en  back 'nuevo' ruta definida en  back
  public nuevo(nuevoUsuario: NuevoUsuario ): Observable<any>{
    return this.httpClient.post<any>(this.authURL + 'nuevo' , nuevoUsuario);
  }

  //post<JwtDTO> definido en back 
  public login(loginUsuuario: LoginUsuario): Observable<JwtDTO>{
    return this.httpClient.post<JwtDTO>(this.authURL + 'login', loginUsuuario);
  }

}
