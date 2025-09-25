import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AlunoService } from '../../services/aluno';
import { Aluno } from '../../models/aluno.model';

@Component({
  selector: 'app-aluno-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './aluno-list.html',
  styleUrl: './aluno-list.css'
})
export class AlunoList implements OnInit {
  alunos: Aluno[] = [];
  alunosFiltrados: Aluno[] = [];
  filtro: string = '';
  alunoParaExcluir: Aluno | null = null;

  constructor(
    private alunoService: AlunoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.carregarAlunos();
  }

  carregarAlunos(): void {
    this.alunoService.listarTodos().subscribe({
      next: (alunos) => {
        this.alunos = alunos;
        this.alunosFiltrados = alunos;
      },
      error: (error) => {
        console.error('Erro ao carregar alunos:', error);
        // Aqui você pode adicionar uma notificação de erro
      }
    });
  }

  filtrarAlunos(): void {
    if (!this.filtro.trim()) {
      this.alunosFiltrados = this.alunos;
    } else {
      const filtroLower = this.filtro.toLowerCase();
      this.alunosFiltrados = this.alunos.filter(aluno =>
        aluno.nome.toLowerCase().includes(filtroLower) ||
        aluno.curso.toLowerCase().includes(filtroLower)
      );
    }
  }

  novoAluno(): void {
    this.router.navigate(['/alunos/novo']);
  }

  editarAluno(aluno: Aluno): void {
    this.router.navigate(['/alunos/editar', aluno.id]);
  }

  confirmarExclusao(aluno: Aluno): void {
    this.alunoParaExcluir = aluno;
  }

  cancelarExclusao(): void {
    this.alunoParaExcluir = null;
  }

  excluirAluno(): void {
    if (this.alunoParaExcluir && this.alunoParaExcluir.id) {
      this.alunoService.deletar(this.alunoParaExcluir.id).subscribe({
        next: () => {
          this.carregarAlunos();
          this.alunoParaExcluir = null;
          // Aqui você pode adicionar uma notificação de sucesso
        },
        error: (error) => {
          console.error('Erro ao excluir aluno:', error);
          this.alunoParaExcluir = null;
          // Aqui você pode adicionar uma notificação de erro
        }
      });
    }
  }
}

