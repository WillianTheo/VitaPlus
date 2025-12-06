# SGHSS - Sistema de Gestão Hospitalar e de Serviços de Saúde

**Disciplina:** Projeto de Desenvolvimento de Sistemas (Back-end)
**Instituição:** UNINTER
**Aluno:** Willian Joel Theodoro
**RU:** 4532722

---

## 📋 Sobre o Projeto

O **SGHSS** (Sistema de Gestão Hospitalar e de Serviços de Saúde) é uma plataforma desenvolvida para a instituição VidaPlus. O objetivo é centralizar a gestão administrativa e clínica, garantindo a segurança dos dados e conformidade com a LGPD[cite: 5, 24].

O foco deste desenvolvimento (Back-end) foi a implementação de regras de negócio consistentes, validação de dados no servidor e controle de acesso baseado em perfis (RBAC).

---

## 🚀 Funcionalidades Principais (Back-end)

### 1. Gestão de Acesso (RBAC)
O sistema implementa três níveis de permissão distintos[cite: 26, 69]:
* **Administrador:** Acesso total (Pacientes, Médicos, Agendamentos) e visualização exclusiva de **Logs de Auditoria**.
* **Médico:** Acesso à agenda, cadastro de pacientes e registro de prontuários.
* **Paciente:** Acesso restrito apenas à visualização dos seus próprios agendamentos.

### 2. Gestão de Pacientes (CRUD)
* Cadastro com validação de campos obrigatórios (ex: Data de Nascimento)[cite: 1258].
* Busca eficiente por Nome ou CPF[cite: 230].
* Feedback visual de sucesso ou erro de validação.

### 3. Agendamentos e Cancelamento Lógico
Implementação de regra de negócio para preservação de histórico:
* O sistema não deleta agendamentos fisicamente do banco de dados.
* Utiliza-se o método **UPDATE** para alterar o status da consulta para `Cancelado`[cite: 718, 1303].

### 4. Prontuário e Automação de Status
Lógica transacional implementada no registro de atendimento[cite: 831]:
* Ao registrar um prontuário (`POST`), o sistema automaticamente:
    1. Salva o texto médico;
    2. Atualiza o status do prontuário para `Registrado`;
    3. Atualiza o status da consulta para `Concluído`.

### 5. Segurança e Auditoria
* Módulo de **Auditoria** para rastreabilidade de ações sensíveis (Compliance LGPD)[cite: 982].

---

## 🛠️ Tecnologias Utilizadas

* **Linguagem:** JavaScript/TypeScript
* **Database:** Banco Relacional (SQL)
* **API:** RESTful
* **Frontend:** React (Interface de consumo da API)

---

## 📚 Documentação da API

Abaixo, a descrição dos principais recursos disponibilizados pelo Back-end, conforme implementado no projeto.

### 🏥 Pacientes (`/pacientes`)

| Método | Endpoint | Descrição |
| :--- | :--- | :--- |
| **GET** | `/pacientes?cpf={cpf}` | Busca paciente por CPF. Retorna "Nenhum paciente encontrado" se vazio[cite: 252]. |
| **POST** | `/pacientes` | Cadastra novo paciente. Valida campos obrigatórios[cite: 269]. |
| **PUT** | `/pacientes/:id` | Atualiza dados cadastrais[cite: 327]. |
| **DELETE** | `/pacientes/:id` | Remove o registro do paciente[cite: 390]. |

### 📅 Agendamentos (`/agendamentos`)

| Método | Endpoint | Descrição |
| :--- | :--- | :--- |
| **GET** | `/agendamentos` | Lista consultas filtrando por Médico ou Paciente[cite: 471]. |
| **POST** | `/agendamentos` | Cria um vínculo entre Médico e Paciente em data/hora específica[cite: 555]. |
| **PUT** | `/agendamentos/:id` | Usado para remarcar ou **Cancelar** (Logical Delete)[cite: 630]. |

### 📝 Prontuários (`/prontuarios`)

| Método | Endpoint | Descrição |
| :--- | :--- | :--- |
| **GET** | `/prontuarios` | Busca histórico clínico pelo CPF do paciente[cite: 832]. |
| **POST** | `/prontuarios` | Registra prescrição e dispara gatilho de conclusão da consulta[cite: 833]. |

---

## ⚙️ Como Rodar o Projeto

1.  Clone este repositório:
    ```bash
    git clone [https://github.com/seu-usuario/projeto-sghss.git](https://github.com/seu-usuario/projeto-sghss.git)
    ```
2.  Instale as dependências:
    ```bash
    npm install
    ```
3.  Execute o projeto:
    ```bash
    npm run dev
    ```
4.  Acesse via navegador em `http://localhost:8080` (ou porta indicada).

---

## 📄 Status do Projeto

✅ **Concluído.** Todas as regras de negócio e requisitos funcionais propostos no estudo de caso VidaPlus foram atendidos.
