import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FuncionarioListComponent } from './components/funcionario-list/funcionario-list.component';
import { FuncionarioCreateComponent } from './components/funcionario-create/funcionario-create.component';
import { FuncionarioUpdateComponent } from './components/funcionario-update/funcionario-update.component';
import { FuncionarioDeleteComponent } from './components/funcionario-delete/funcionario-delete.component';

@Component({
  selector: 'app-root',
  standalone: true,  // Adiciona o AppComponent como standalone
  imports: [RouterModule, FormsModule ,FuncionarioListComponent, FuncionarioCreateComponent, FuncionarioUpdateComponent, FuncionarioDeleteComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Meu App de Funcionários'; // Defina a variável title
  }
