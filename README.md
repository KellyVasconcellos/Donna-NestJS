# Projeto Back-end

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Indice

- [Sobre](#-sobre)
- [Tecnologias utilizadas](#-tecnologias-utilizadas)
- [Como baixar o projeto](#-como-baixar-o-projeto)

## 🔖&nbsp; Sobre

O projeto **Donna** é uma API back-end para agendamento de serviços de salão de beleza, o projeto foi integrado com o banco de dados via Docker.

---

## 🚀 Tecnologias utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- [NestJS](https://nestjs.com)
- [PostgreSQL](https://www.postgresql.org/)
- [Docker](https://www.docker.com/)
- [TypeScript](https://www.typescriptlang.org/)

---

## 🗂 Como baixar o projeto

```bash
    # Clonar o repositório
    $ git clone https://github.com/KellyVasconcellos/Donna-NestJS.git
    # Entrar no diretório
    $ cd Donna-NestJS
```

## 🗂 Como inicializar o projeto
```bash
   # Inicializar PostgreSQL com Docker Compose
    $ docker compose up
    # Inicializar migration para criar tabelas
    $ npm run typeorm migration:run
    # Inicializar projeto
    $ npm run start:dev

```
---

Desenvolvido 💜 por Kelly Vasconcellos

