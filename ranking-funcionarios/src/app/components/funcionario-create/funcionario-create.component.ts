import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FuncionarioService } from '../../services/funcionario.service';
import { Funcionario } from '../../models/funcionario.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-funcionario-create',
  standalone: true,  // Tornando o FuncionarioCreateComponent standalone
  templateUrl: './funcionario-create.component.html',
  styleUrls: ['./funcionario-create.component.css'],
  imports: [FormsModule]
})
export class FuncionarioCreateComponent {
  funcionario: Funcionario = {
    id: undefined,
    nome: '',
    meta: '',
    pontos: 0
  };

  constructor(
    private funcionarioService: FuncionarioService,
    private router: Router
  ) {}

  criarFuncionario(): void {
    this.funcionarioService.criarFuncionario(this.funcionario).subscribe({
      next: () => {
        console.log('Funcionário criado com sucesso!');
        this.router.navigate(['/funcionarios']);
      },
      error: (erro) => {
        console.error('Erro ao criar funcionário:', erro);
      }
    });
  }
}