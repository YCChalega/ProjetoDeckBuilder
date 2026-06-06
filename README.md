# MTG Deck Builder Backend

Este é o backend para um gerenciador de Decklist de Magic: The Gathering, construído com Node.js e Express. Ele permite gerenciar cartas em um deck através de uma API REST, utilizando armazenamento em memória.

## 🚀 Tecnologias

- Node.js
- Express
- CORS
- Dotenv
- Nodemon (ambiente de desenvolvimento)

## 📦 Instalação

1. Clone o repositório.
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Crie um arquivo `.env` na raiz do projeto e configure a porta (opcional):
   ```env
   PORT=3000
   ```

## 🛠️ Como Executar

- Para produção:
  ```bash
  npm start
  ```
- Para desenvolvimento (com reload automático):
  ```bash
  npm run dev
  ```

## 🔌 API Endpoints

A URL base da API é `http://localhost:3000/api/deck`.

| Método | Endpoint | Descrição |
| :--- | :--- | :--- |
| **GET** | `/` | Retorna todas as cartas do deck. |
| **POST** | `/` | Adiciona uma nova carta ou incrementa a quantidade de uma existente. |
| **PUT** | `/:id` | Atualiza a quantidade de uma carta específica pelo ID. |
| **DELETE** | `/:id` | Remove uma carta do deck pelo ID. |

### Exemplo de corpo para POST:
```json
{ "id": "123", "name": "Black Lotus", "type": "Artifact", "manaCost": "0", "imageUrl": "url", "quantity": 1 }
```