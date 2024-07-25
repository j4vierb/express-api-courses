# Express API REST about courses

This project is only to build a demo to learn how to use Express.js and MySQL. To configure it only change the database connection params in `.%config.js`, it should to look like this:

```js
const config = {
  db: {
    host: "localhost",
    user: "root",
    password: "password",
    database: "college",
    connectTimeout: 60000
  },
  listPerPage: 10,
};

export default config;
```

## Model-View-Controller architecture

```plaintext
| ---------- |
|   View     |
| ---------- |
| Controller |
| ---------- |                   | ---------- |
|   Model    | <- D. Injection - |  Services  |
| ---------- |                   | ---------- |
```

## Features

- [x] Hacer validaciones parciales en el controlador utilizando `Schema.partial().safeParse();`.
- [x] Instalar una libreria para solucionar el problema de CORS.
- [x] Terminar implementación del endpoint del recurso `courses`.
- [x] Definir las reglas de negocio para courses. Refactorizar el recurso de students.
- [x] Refactorizar la validación de las reglas de negocio del servicio al modelo.
- [%] Añadir las pruebas de postman en collections.
- [%] Agregar las validaciones de las reglas de negocio.
- [%] Agregar seguridad y autenticación.
- [%] Agregar pruebas unitarias.
