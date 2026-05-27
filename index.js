const method = process.argv[2];
const endpoint = process.argv[3];

const partes = endpoint.split("/");

const [resource, id] = partes;

console.log("Método:", method);
console.log("Endpoint:", endpoint);

console.log("Recurso:", resource);
console.log("ID:", id);


