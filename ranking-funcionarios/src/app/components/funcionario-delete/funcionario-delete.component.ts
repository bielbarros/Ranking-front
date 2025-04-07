import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FuncionarioService } from '../../services/funcionario.service';

@Component({
  selector: 'app-funcionario-delete',
  standalone: true,
  templateUrl: './funcionario-delete.component.html',
  styleUrls: ['./funcionario-delete.component.css']
})
export class FuncionarioDeleteComponent implements OnInit {
  id!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private funcionarioService: FuncionarioService
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.deletarFuncionario();
  }

  deletarFuncionario(): void {
    this.funcionarioService.deletarFuncionario(this.id).subscribe({
      next: () => {
        alert('Funcionário deletado com sucesso!');
        this.router.navigate(['/']); // Volta pra lista
      },
      error: (err) => {
        console.error('Erro ao deletar:', err);
        alert('Erro ao deletar funcionário');
        this.router.navigate(['/']);
      }
    });
  }
}
