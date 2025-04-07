import { Routes } from '@angular/router';
import { FuncionarioListComponent } from './components/funcionario-list/funcionario-list.component';
import { FuncionarioCreateComponent } from './components/funcionario-create/funcionario-create.component';
import { FuncionarioUpdateComponent } from './components/funcionario-update/funcionario-update.component';
import { FuncionarioDeleteComponent } from './components/funcionario-delete/funcionario-delete.component';

export const routes: Routes = [
  { path: 'funcionarios', component: FuncionarioListComponent },
  { path: 'funcionarios/create', component: FuncionarioCreateComponent },
  { path: 'funcionarios/update/:id', component: FuncionarioUpdateComponent },
  { path: 'funcionarios/delete/:id', component: FuncionarioDeleteComponent },
  { path: '', redirectTo: '/funcionarios', pathMatch: 'full' }
];

