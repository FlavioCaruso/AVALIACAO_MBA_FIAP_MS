## Atividade FIAP - Desenvolvimento de microsserviços e API

### Dependências :warning:

<b>1</b> - Acesse a pasta Financeiro e rode o comando 'npm install'<br>
<b>2</b> - Acesse a pasta Usuario e rode o comando 'npm install'<br>

---

### Configuração do MongoDB :shield:

<b>1</b> - Acesse a pasta Financeiro/src/config/cfg.js e altere o db_path:<br>

```js
"mongodb+srv://*****:*****@*****.*****.mongodb.net/*****?retryWrites=true&w=majority";
```

para sua conexão de banco de dados.<br>
<b>2</b> - Acesse a pasta Usuario/src/config/cfg.js e altere o db_path:<br>

```js
"mongodb+srv://*****:*****@*****.*****.mongodb.net/*****?retryWrites=true&w=majority";
```

para sua conexão de banco de dados.<br>

---

### Inicializando :heavy_check_mark:

<b>1</b> - Acesse a pasta Financeiro e rode o comando:<br>

```shell
npm run dev
```

Será inicializado um servidor em: [http://localhost:3001](http://localhost:3001).

<b>2</b> - Acesse a pasta Usuario e rode o comando:<br>

```shell
npm run dev
```

Será inicializado um servidor em: [http://localhost:3000](http://localhost:3000).
