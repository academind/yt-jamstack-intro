# What is the JAMStack?
Check [my tutorial](https://academind.com/learn/javascript/what-is-the-jamstack) and/ or dive into [https://jamstack.org](https://jamstack.org).

# Using this Demo Project
This project was created to demonstrate how the JAMStack works. If you want to use this project, make sure you bring your own (Firebase) API.

If you are using the Firebase realtime database, you can use this code and only change

```
YOUR_FIREBASE_API
```

in the `comments.js` file to your Firebase REST API url.

Thereafter, execute

```sh
npm install
```

to install all dependencies and

```sh
npm run dev
```

to run the development server.

Run

```sh
npm run build
```

to build the project for production and see all generated files in the `public` folder.

Please note that this is just a demo project, it's **not** optimized, polished or battle-tested for production!