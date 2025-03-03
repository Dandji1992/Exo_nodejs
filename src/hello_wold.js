// Créer un fichier nommé hello-world.js
// Écrire un programme pour imprimer "HELLO WORLD" sur la console
console.log('hello wold');

// créer un serveur  
// Écrire un programme qui s'exécute sur le port 3000 
// et répond avec  '<h1>Hello Node !!!!</h1>\n' lorsque quelqu'un atteint http://localhost:3000 

import { createServer } from "http";

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});




