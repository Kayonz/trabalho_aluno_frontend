import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AlunoService } from '../../services/aluno';
import { Aluno } from '../../models/aluno.model';

@Component({
  selector: 'app-aluno-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './aluno-form.html',
  styleUrl: './aluno-form.css'
})
export class AlunoForm implements OnInit {
  aluno: Aluno = {
    nome: '',
    curso: '',
    telefone: ''
  };
  
  isEdicao = false;
  salvando = false;
  alunoId: number | null = null;

  constructor(
    private alunoService: AlunoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.alunoId = +params['id'];
        this.isEdicao = true;
        this.carregarAluno();
      }
    });
  }

  carregarAluno(): void {
    if (this.alunoId) {
      this.alunoService.buscarPorId(this.alunoId).subscribe({
        next: (aluno: Aluno) => {
          this.aluno = aluno;
        },
        error: (error: any) => {
          console.error('Erro ao carregar aluno:', error);
          this.router.navigate(['/alunos']);
        }
      });
    }
  }

  salvar(): void {
    if (this.salvando) return;
    
    this.salvando = true;
    
    const operacao = this.isEdicao && this.alunoId
      ? this.alunoService.atualizar(this.alunoId, this.aluno)
      : this.alunoService.criar(this.aluno);

    operacao.subscribe({
      next: () => {
        this.salvando = false;
        this.router.navigate(['/alunos']);
        // Aqui você pode adicionar uma notificação de sucesso
      },
      error: (error: any) => {
        this.salvando = false;
        console.error('Erro ao salvar aluno:', error);
        // Aqui você pode adicionar uma notificação de erro
      }
    });
  }

  voltar(): void {
    this.router.navigate(['/alunos']);
  }
}

