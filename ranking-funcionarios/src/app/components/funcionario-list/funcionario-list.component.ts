import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../../services/funcionario.service'; // ajuste o caminho se necessário
import { Funcionario } from '../../models/funcionario.model'; // ajuste o caminho se necessário

@Component({
  selector: 'app-funcionario-list',
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
    this.funcionarioService.getFuncionarios().subscribe((data) => {
      this.funcionarios = data;
    });
  }
}
