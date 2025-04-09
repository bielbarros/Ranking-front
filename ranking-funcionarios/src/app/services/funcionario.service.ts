import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Funcionario } from '../models/funcionario.model';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  private baseUrl = 'http://localhost:8080/funcionarios';

  constructor(private http: HttpClient) { }

  getFuncionarios(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(`${this.baseUrl}/ranking`);
  }

  criarFuncionario(funcionario: Funcionario): Observable<Funcionario> {
    return this.http.post<Funcionario>(`${this.baseUrl}/criar`, funcionario);
  }

  deletarFuncionario(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getFuncionarioById(id: number): Observable<Funcionario> {
    return this.http.get<Funcionario>(`http://localhost:8080/funcionarios/${id}`);
  }
  
  atualizarFuncionario(id: number, funcionario: Funcionario): Observable<Funcionario> {
    return this.http.put<Funcionario>(`http://localhost:8080/funcionarios/${id}`, funcionario);
  }
  

}

