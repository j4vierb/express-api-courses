# Express college API REST

This project is only to build a demo to learn how to use Express.js and MySQL. To configure it only change the database connection params in `./config.js`, it should to look like this:

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
