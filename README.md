# Tech Challenge Finance

Aplicação de gerenciamento financeiro desenvolvida com Next.js e Design System.

## 🚀 Como Executar

### Desenvolvimento

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
A aplicação estará disponível em [http://localhost:3000](http://localhost:3000)

##  Documentação de Componentes (Storybook)

Este projeto usa o **Storybook** para documentar e visualizar os componentes do Design System.

### Iniciar o Storybook

```bash
npm run storybook
```

O Storybook estará disponível em [http://localhost:6006](http://localhost:6006)

### Build do Storybook

Para gerar uma versão estática do Storybook:

```bash
npm run build-storybook
```

A versão estática será gerada na pasta `storybook-static/`

### Componentes Documentados

- **Components**
  - `Button` - Botão com variantes (primary, secondary, outline)
  - `TextInput` - Campo para inserir valores
  
- **Layout**
  - `Card` - Card para agrupar conteúdo
  - `Header` - Cabeçalho da aplicação
   - `Modal` - Modal para exibir conteúdo em overlay

### Criando Novas Stories

Para documentar um novo componente, crie um arquivo `ComponentName.stories.tsx` na mesma pasta do componente. Veja exemplos em:
- `src/components/button/Button.stories.tsx`
- `src/layout/modal/Modal.stories.tsx`
- `src/layout/card/Card.stories.tsx`


##  Tecnologias

- **Next.js 15.5.6** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS v4** - Estilização
- **Zustand** - Gerenciamento de estado
- **Storybook** - Documentação de componentes

##  Estrutura do Projeto

```
src/
├── app/              # Páginas e rotas (App Router)
│   ├── page.tsx      # Home page
│   └── layout        # Header padrão 
│   └── transactions/ # Página de listagem de transações
│   └── _transaction-form/ # Formulário de nova transação / editar transação
│   └── _transaction-view/ # Modal para visualizar detalhes da transação
├── components/        # Componentes reutilizáveis
│   ├── button/
│   ├── textInput/
├── layout/           # Componentes de layout
│   ├── card/
│   └── header/
│   ├── modal/
└── store/            # Estado global (Zustand)
    └── accountStore.ts
```

##  Funcionalidades

-  Visualização de saldo da conta
-  Listagem de transações
-  Adicionar nova transação
-  Editar transação existente
-  Excluir transação
-  Visualizar detalhes da transação
-  Design System documentado no Storybook

##  Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Build de produção
- `npm start` - Inicia servidor de produção
- `npm run storybook` - Inicia Storybook
- `npm run build-storybook` - Build estático do Storybook
- `npm run lint` - Executa ESLint

##  Mais Informações

- [Next.js Documentation](https://nextjs.org/docs)
- [Storybook Documentation](https://storybook.js.org/docs)
