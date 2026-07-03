# Acesso ao Banco de Dados e Contas de Teste (Firebase)

Este documento contém os dados de login de teste cadastrados no sistema e o passo a passo para gerenciar usuários e visualizar dados no console do Firebase.

---

## 🔑 Contas de Teste Cadastradas

### 1. Usuário Administrador (Admin)
*   **E-mail:** `admin@kuberlink.com.br`
*   **Senha:** `123adm.`
*   **UID Firebase:** `QiT9CI4TThfQ5TBqMdztb3aGmoE2`

### 2. Usuário Cliente (Client)
*   **E-mail:** `audalio@kuberlink.com`
*   **Senha:** `audalio-kuber1`
*   **UID Firebase:** `QiT9CI4TThfQ5TBqMdztb3aGmoE2`

---

## 🌐 Como Acessar o Painel do Firebase

Toda a administração de autenticação e banco de dados é feita online através do [Firebase Console](https://console.firebase.google.com/).

### 1. Visualizar Usuários Cadastrados (Firebase Authentication)
Para consultar, deletar ou redefinir senhas de contas criadas (incluindo acessos via Google):
1. Acesse o [Firebase Console](https://console.firebase.google.com/).
2. Selecione o projeto **site-kuberlink**.
3. No menu lateral esquerdo, na seção **Build**, clique em **Authentication**.
4. Veja a relação de usuários na aba **Users** (Usuários).

### 2. Visualizar Conteúdos e Tabelas (Cloud Firestore)
Para visualizar os perfis dos usuários e os dados de login:
1. No [Firebase Console](https://console.firebase.google.com/), clique em **Firestore Database** (no menu lateral de Build).
2. Na aba **Data** (Dados), você verá a estrutura de coleções (equivalente a tabelas):
    *   `admins`: Guarda os privilégios dos administradores do sistema.
    *   `clients`: Armazena dados de cadastro de clientes.
3. Cada documento criado dentro das coleções utiliza o **UID do usuário** como o ID do documento. Isso mapeia a conta autenticada diretamente com sua respectiva regalia e perfil (campos: `email`, `role`, `createdAt` e `lastLoginAt`).
