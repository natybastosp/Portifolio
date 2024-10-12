# API de Fórmula 1

Esta é uma API mínima construída com Fastify que fornece informações sobre equipes e pilotos de Fórmula 1.

## Funcionalidades

- Obter uma lista de todas as equipes de Fórmula 1
- Obter uma lista de todos os pilotos de Fórmula 1
- Obter detalhes de um piloto específico por ID
- Obter detalhes de uma equipe específica por ID

## Pré-requisitos

- Node.js
- npm ou yarn

## Instalação

1. Clone o repositório
2. Instale as dependências:
   ```
   npm install
   ```
   ou
   ```
   yarn install
   ```

## Uso

Para iniciar o servidor, execute:

```
node server.js
```

O servidor começará a funcionar em `http://localhost:3333`.

## Endpoints da API

### Obter todas as equipes

```
GET /teams
```

Retorna uma lista de todas as equipes de Fórmula 1.

### Obter todos os pilotos

```
GET /drivers
```

Retorna uma lista de todos os pilotos de Fórmula 1.

### Obter um piloto específico

```
GET /drivers/:id
```

Retorna detalhes de um piloto específico. Substitua `:id` pelo ID do piloto.

### Obter uma equipe específica

```
GET /teams/:id
```

Retorna detalhes de uma equipe específica. Substitua `:id` pelo ID da equipe.

## Tratamento de Erros

- Se um piloto ou equipe com o ID especificado não for encontrado, a API retornará um código de status 404 com uma mensagem de "não encontrado".

## CORS

Esta API tem CORS habilitado e permite solicitações de qualquer origem (`*`).

## Contribuindo

Sinta-se à vontade para enviar pull requests ou abrir issues para melhorar a API.

## Licença

[Licença MIT](LICENSE)
