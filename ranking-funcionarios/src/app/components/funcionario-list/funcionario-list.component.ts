import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../../services/funcionario.service'; // ajuste o caminho se necessário
import { Funcionario } from '../../models/funcionario.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-funcionario-list',
  standalone: true,  // Tornando o FuncionarioListComponent standalone
  imports: [CommonModule],  // Importando CommonModule para suportar ngIf, ngFor, etc.
  templateUrl: './funcionario-list.component.html',
  styleUrls: ['./funcionario-list.component.css']
})
export class FuncionarioListComponent implements OnInit {
  funcionarios: Funcionario[] = [];

  constructor(private funcionarioService: FuncionarioService) { }

  ngOnInit(): void {
    this.getFuncionarios();
  }

  getFuncionarios(): void {
    this.funcionarioService.getFuncionarios().subscribe(
      (data) => {
        console.log('Funcionarios recebidos:', data);
        this.funcionarios = data;
      },
      (error) => {
        console.error('Erro ao buscar funcionários:', error);
      }
    );
  }
  
}
