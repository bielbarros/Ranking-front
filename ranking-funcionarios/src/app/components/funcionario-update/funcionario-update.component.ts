import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FuncionarioService } from '../../services/funcionario.service';
import { Funcionario } from '../../models/funcionario.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-funcionario-update',
  standalone: true,  // Tornando o FuncionarioUpdateComponent standalone
  templateUrl: './funcionario-update.component.html',
  styleUrls: ['./funcionario-update.component.css'],
  imports: [FormsModule]
})
export class FuncionarioUpdateComponent implements OnInit {
  funcionario: Funcionario = {
    nome: '',
    meta: '',
    pontos: 0
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private funcionarioService: FuncionarioService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.funcionarioService.getFuncionarioById(id).subscribe((data) => {
      this.funcionario = data;
    });
  }

  atualizarFuncionario(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.funcionarioService.atualizarFuncionario(id, this.funcionario).subscribe(() => {
      this.router.navigate(['/']); // Voltar para a lista após atualizar
    });
  }
}