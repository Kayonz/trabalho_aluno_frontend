# Sistema de Gerenciamento de Alunos - Frontend Angular

Este é o frontend Angular para o sistema CRUD de alunos, desenvolvido para integrar com o backend Spring Boot.

## Funcionalidades

- **Página Inicial**: Apresentação do sistema com descrição das funcionalidades
- **Lista de Alunos**: Visualização de todos os alunos cadastrados com funcionalidade de busca
- **Cadastro de Alunos**: Formulário para adicionar novos alunos
- **Edição de Alunos**: Formulário para editar informações de alunos existentes
- **Exclusão de Alunos**: Funcionalidade para remover alunos com confirmação

## Tecnologias Utilizadas

- Angular 18+
- TypeScript
- HTML5 e CSS3
- Angular Router para navegação
- Angular Forms para validação
- HttpClient para comunicação com API

## Estrutura do Projeto

```
src/
├── app/
│   ├── components/
│   │   ├── home/              # Página inicial
│   │   ├── aluno-list/        # Lista de alunos
│   │   └── aluno-form/        # Formulário de aluno
│   ├── models/
│   │   └── aluno.model.ts     # Interface do modelo Aluno
│   ├── services/
│   │   └── aluno.ts           # Serviço para API de alunos
│   ├── app.routes.ts          # Configuração de rotas
│   ├── app.config.ts          # Configuração da aplicação
│   └── app.ts                 # Componente principal
└── styles.css                 # Estilos globais
```

## Configuração e Execução

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn
- Angular CLI

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/Kayonz/trabalho_aluno_frontend.git
cd trabalho_aluno_frontend
```

2. Instale as dependências:
```bash
npm install
```

3. Configure a URL do backend no arquivo `src/app/services/aluno.ts`:
```typescript
private apiUrl = 'http://localhost:8080/api/alunos';
```

### Execução

Para executar em modo de desenvolvimento:
```bash
ng serve
```

A aplicação estará disponível em `http://localhost:4200`

Para build de produção:
```bash
ng build
```

## Integração com Backend

O frontend está configurado para se comunicar com o backend Spring Boot através das seguintes APIs:

- `GET /api/alunos` - Listar todos os alunos
- `GET /api/alunos/{id}` - Buscar aluno por ID
- `POST /api/alunos` - Criar novo aluno
- `PUT /api/alunos/{id}` - Atualizar aluno
- `DELETE /api/alunos/{id}` - Deletar aluno

## Validações

O formulário de aluno inclui as seguintes validações:

- **Nome**: Obrigatório, mínimo 3 caracteres
- **Curso**: Obrigatório, mínimo 3 caracteres  
- **Telefone**: Opcional

## Funcionalidades Implementadas

### Navegação
- Menu de navegação responsivo
- Roteamento entre páginas
- Indicação visual da página ativa

### Lista de Alunos
- Exibição em tabela responsiva
- Campo de busca por nome ou curso
- Botões de ação (Editar/Excluir)
- Modal de confirmação para exclusão
- Estado vazio quando não há alunos

### Formulário de Aluno
- Validação em tempo real
- Mensagens de erro específicas
- Suporte para criação e edição
- Botões de ação (Salvar/Cancelar)

### Design Responsivo
- Layout adaptável para desktop e mobile
- Componentes otimizados para touch
- Tipografia e cores consistentes

## Próximos Passos

Para completar a integração:

1. Certifique-se de que o backend Spring Boot está rodando na porta 8080
2. Configure CORS no backend para permitir requisições do frontend
3. Teste todas as operações CRUD
4. Implemente tratamento de erros mais robusto
5. Adicione notificações de sucesso/erro para o usuário

## Contribuição

Este projeto foi desenvolvido como parte de uma atividade acadêmica seguindo os requisitos especificados no documento PDF fornecido.

