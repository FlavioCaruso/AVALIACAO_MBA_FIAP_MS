# Atividade FIAP - Desenvolvimento de microsserviços e API

## Dependências

Instalando as depedências:
1 - Acesse a pasta Financeiro e rode o comando 'npm install'
2 - Acesse a pasta Usuario e rode o comando 'npm install'

---

## Configuração do MongoDB

1 - Acesse a pasta Financeiro/src/config/cfg.js e altere o db_path:

```js
"mongodb+srv://*****:*****@*****.*****.mongodb.net/*****?retryWrites=true&w=majority";
```

para sua conexão de banco de dados.
2 - Acesse a pasta Usuario/src/config/cfg.js e altere o db_path:

```js
"mongodb+srv://*****:*****@*****.*****.mongodb.net/*****?retryWrites=true&w=majority";
```

para sua conexão de banco de dados.

---

## Inicializando

1 - Acesse a pasta Financeiro e rode o comando:

```shell
npm run dev
```

Será inicializado um servidor em: [http://localhost:3001](http://localhost:3001).

2 - Acesse a pasta Usuario e rode o comando:

```shell
npm run dev
```

Será inicializado um servidor em: [http://localhost:3000](http://localhost:3000).
