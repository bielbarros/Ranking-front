import { RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../../services/funcionario.service'; // ajuste o caminho se necessário
import { Funcionario } from '../../models/funcionario.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-funcionario-list',
  standalone: true,  // Tornando o FuncionarioListComponent standalone
  imports: [CommonModule, RouterModule],  // Importando CommonModule para suportar ngIf, ngFor, etc.
  templateUrl: './funcionario-list.component.html',
  styleUrls: ['./funcionario-list.component.css']
})
export class FuncionarioListComponent implements OnInit {
  funcionarios: Funcionario[] = [];

  constructor(private funcionarioService: FuncionarioService) { }

  ngOnInit(): void {
    this.criterioOrdenacao = 'pontos';  // define como padrão
    this.getFuncionarios();
    
  }

  getFuncionarios(): void {
    this.funcionarioService.getFuncionarios().subscribe(
      (data) => {
        console.log('Funcionarios recebidos:', data);
        this.funcionarios = data;
        this.ordenarFuncionarios();
      },
      (error) => {
        console.error('Erro ao buscar funcionários:', error);
      }
    );
  }

  criterioOrdenacao = 'nome';

  ordenarFuncionarios(): void {
    this.funcionarios.sort((a, b) => {
      if (this.criterioOrdenacao === 'nome') {
        return a.nome.localeCompare(b.nome);
      } else if (this.criterioOrdenacao === 'pontos') {
        return b.pontos - a.pontos;
      } else if (this.criterioOrdenacao === 'meta') {
        const metaA = parseInt(a.meta.match(/\d+/)?.[0] || '0', 10);
        const metaB = parseInt(b.meta.match(/\d+/)?.[0] || '0', 10);
        return metaB - metaA;
      }
      return 0;
    });
  
  
  }

  getProgresso(funcionario: Funcionario): number {
    const meta = typeof funcionario.meta === 'string' ? parseInt(funcionario.meta.match(/\d+/)?.[0] || '0', 10) : funcionario.meta;
    const pontos = funcionario.pontos || 0;
    return Math.min(100, Math.round((pontos / meta) * 100));
  }
  
  
}



