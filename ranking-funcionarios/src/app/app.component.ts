import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FuncionarioListComponent } from './components/funcionario-list/funcionario-list.component';
import { FuncionarioCreateComponent } from './components/funcionario-create/funcionario-create.component';
import { FuncionarioUpdateComponent } from './components/funcionario-update/funcionario-update.component';
import { FuncionarioDeleteComponent } from './components/funcionario-delete/funcionario-delete.component';
import { FooterComponent } from './shared/footer/footer.component';
@Component({
  selector: 'app-root',
  standalone: true,  // Tornando o AppComponent standalone
  imports: [RouterModule, FooterComponent, FuncionarioListComponent, FuncionarioCreateComponent, FuncionarioUpdateComponent, FuncionarioDeleteComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Meu App de Funcionários'; // Defina a variável title
}