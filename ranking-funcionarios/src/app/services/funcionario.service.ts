import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Funcionario } from '../models/funcionario.model';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  private apiUrl = 'http://localhost:8080/funcionarios'; // URL da sua API

  constructor(private http: HttpClient) { }

  getFuncionarios(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(this.apiUrl);
  }

  criarFuncionario(funcionario: Funcionario): Observable<Funcionario> {
    return this.http.post<Funcionario>(this.apiUrl + '/criar', funcionario);
  }
}
