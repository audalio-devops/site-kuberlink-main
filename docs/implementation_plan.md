# Plano de Implementação: Área de Login e Tela de Autenticação - Kuberlink

Este plano detalha a inclusão de um botão/link de login no Header do site e a criação de uma tela de login funcional habilitando e-mail/senha e autenticação via Google (Firebase Auth).

## User Review Required

> [!IMPORTANT]
> **Configurações do Firebase**: O projeto utilizará as credenciais do Firebase especificadas em `INFOS.txt`.
> As chaves de ambiente `NEXT_PUBLIC_FIREBASE_*` devem ser inseridas em um arquivo `.env.local` na raiz do projeto.
>
> **Abordagem de Redirecionamento**:
> - Se o build do projeto estiver configurado para exportação estática (`output: 'export'`), as rotas protegidas usarão um `AuthGuard` baseado no cliente (`document.cookie`), conforme sugerido em `INFOS.txt`.
> - Caso contrário, usaremos o `middleware.ts` do Next.js. Iremos implementar uma proteção simples no cliente por padrão para manter compatibilidade total.

---

## Proposed Changes

### [Layout & Navegação]

#### [MODIFY] [Header.tsx](file:///c:/Projetos/site-kuberlink-main/app/components/Header.tsx)
- Adicionar o botão **"LOGIN"** no Header (visão desktop). Ele ficará posicionado ao lado do botão "SEJA NOSSO PARCEIRO" seguindo a mesma identidade visual de botões arredondados (`rounded-full`), porém com uma cor contrastante que indique área de login (ex: fundo verde escuro `#10826B` ou azul `#487CBF`).
- Adicionar suporte a responsividade no Header Mobile, incluindo um link de login visível no topo da barra.

---

### [Firebase Setup]

#### [NEW] [firebase.ts](file:///c:/Projetos/site-kuberlink-main/app/lib/firebase.ts)
- Criar configuração do Firebase utilizando variáves de ambiente.
- Exportar instâncias de `auth` (Firebase Auth), `db` (Firestore Database) e `googleProvider` (GoogleAuthProvider).

---

### [Login Page & Components]

#### [NEW] [page.tsx](file:///c:/Projetos/site-kuberlink-main/app/login/page.tsx)
- Criar nova rota `/login` com layout responsivo do Kuberlink (utilizando o Exo 2 Font e design do site).
- Centralizar o formulário de login na tela com um fundo moderno e limpo.

#### [NEW] [login-form.tsx](file:///c:/Projetos/site-kuberlink-main/app/components/login-form.tsx)
- Desenvolver o formulário de login integrado ao Firebase Auth com NextUI e Tailwind CSS.
- **Campos e Ações**:
  - E-mail e Senha (com validação em tempo real de formato).
  - Controle de visibilidade da senha (olho aberto/fechado).
  - Link/Botão para "Esqueci minha senha" (envio de e-mail de recuperação pelo Firebase).
  - Botão de envio "Entrar" com estado de Carregamento (`loading`).
  - Divisor "Ou" seguido de botão customizado "Entrar com Google" (usando SVG oficial do Google).
  - Exibição de alertas de erro específicos caso o login falhe.

---

### [Páginas de Destino (Welcome)]

#### [NEW] [page.tsx](file:///c:/Projetos/site-kuberlink-main/app/welcome/admin/page.tsx)
- Tela simples de boas vindas para Administrador.

#### [NEW] [page.tsx](file:///c:/Projetos/site-kuberlink-main/app/welcome/client/page.tsx)
- Tela simples de boas vindas para Cliente.

---

## Verification Plan

### Automated Tests
*Não há suíte de testes automatizados configurada. A validação será executada via navegador usando o agente.*

### Manual Verification
1. **Verificação Visual da Home**:
   - Iniciar o servidor local (`npm run dev`) e navegar para `http://localhost:3000`.
   - Validar se o botão "ÁREA EXCLUSIVA" está renderizado corretamente em telas desktop e mobile.

2. **Verificação de Navegação**:
   - Clicar no botão da Home e garantir o redirecionamento correto para `/login`.

3. **Verificação da Tela de Login**:
   - Testar preenchimento dos inputs e validação nativa.
   - Testar o botão de mostrar/esconder senha.
   - Clicar no login do Google e no botão de "Esqueci minha senha" observando os logs do Firebase e redirecionamento.
