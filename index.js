const method = process.argv[2];
const endpoint = process.argv[3];

const partes = endpoint.split("/");
const [resource, id] = partes;

switch (method) {
  case "GET":
    if (!id) {
      getProducts();
    }
    break;


  default:
    console.log("Comando no reconocido");
}


async function getProducts() {
  try {
    const response = await fetch(
      "https://fakestoreapi.com/products"
    );

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log("Error al obtener productos");
  }
}