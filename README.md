# 📘 API RESTful com Node.js, TypeScript e Firebase

Este repositório contém o código-fonte de uma **API RESTful** desenvolvida durante um curso prático.  
O objetivo do projeto foi aprender a construir uma API moderna utilizando **Node.js**, **TypeScript** e serviços do **Firebase**, aplicando boas práticas de arquitetura, segurança, validação e deploy em nuvem.

---

## 🎯 Objetivo do Projeto

O projeto tem como finalidade simular a construção de uma API real do zero, aplicando conceitos importantes como:

- Arquitetura de camadas (Controller, Service, Repository)
- Validação de dados
- Upload de arquivos
- Autenticação de usuários
- Deploy em ambiente de produção (Google Cloud)

---

## 📚 O que foi aprendido

Durante o desenvolvimento da API, foram abordados os seguintes conceitos e práticas:

- Conceitos de APIs REST/RESTful
- Configuração de ambiente de desenvolvimento backend
- Criação e gerenciamento de rotas com Express
- Utilização correta dos métodos HTTP (GET, POST, PUT, DELETE)
- Validação de dados com **Joi** e **Celebrate**
- Estruturação da aplicação com os padrões:
  - Controller (controle de rotas)
  - Service (lógica de negócio)
  - Repository (acesso a dados)
- Manipulação de erros e respostas padronizadas
- Persistência de dados com **Firestore**
- Autenticação de usuários com **Firebase Authentication**
- Upload de imagens para o **Firebase Cloud Storage**
- Testes de rotas utilizando **Postman**
- Deploy da API usando **Google Cloud Functions**
- Monitoramento de logs e erros na **Google Cloud**

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Descrição |
|------------|-----------|
| Node.js | Ambiente de execução JavaScript |
| TypeScript | Superset do JavaScript com tipagem estática |
| Express | Framework web para Node.js |
| Firebase | Plataforma para backend (Auth, Firestore, Storage, Functions) |
| Joi + Celebrate | Validação de dados |
| Express Async Handler | Tratamento de funções assíncronas |
| Postman | Teste e documentação de APIs |
| ts-watch | Monitoramento de mudanças no código |
| NPM | Gerenciador de pacotes |

---

## 📂 Estrutura do Projeto

```bash
src/
├── controllers/      # Lógica das rotas
├── services/         # Regras de negócio
├── repositories/     # Interação com banco de dados
├── middlewares/      # Validações e tratamento de erros
├── routes/           # Definição das rotas da API
├── config/           # Configurações do Firebase e outros serviços
└── index.ts          # Ponto de entrada da aplicação
