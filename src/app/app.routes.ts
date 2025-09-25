import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { AlunoList } from './components/aluno-list/aluno-list';
import { AlunoForm } from './components/aluno-form/aluno-form';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'alunos', component: AlunoList },
  { path: 'alunos/novo', component: AlunoForm },
  { path: 'alunos/editar/:id', component: AlunoForm },
  { path: '**', redirectTo: '' }
];

