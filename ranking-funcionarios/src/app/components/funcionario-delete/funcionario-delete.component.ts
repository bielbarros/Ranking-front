import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FuncionarioService } from '../../services/funcionario.service';
import { CommonModule } from '@angular/common'; // Adicione isso no topo


@Component({
  selector: 'app-funcionario-delete',
  standalone: true,
  templateUrl: './funcionario-delete.component.html',
  styleUrls: ['./funcionario-delete.component.css'],
  imports: [CommonModule]
  
})
export class FuncionarioDeleteComponent implements OnInit {
  id!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private funcionarioService: FuncionarioService
  ) {}


  funcionario: any; // Ou tipo Funcionario, se estiver importado


  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  
    this.funcionarioService.getFuncionarioById(this.id).subscribe({
      next: (data) => {
        this.funcionario = data;
      },
      error: (err) => {
        console.error('Erro ao buscar funcionário:', err);
        alert('Funcionário não encontrado');
        this.router.navigate(['/']);
      }
    });
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

  cancelar(): void {
    this.router.navigate(['/']);
  }
  

}
