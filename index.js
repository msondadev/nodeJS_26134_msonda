const method = process.argv[2];
const endpoint = process.argv[3];

const partes = endpoint.split("/");

const [resource, id] = partes;

const [, , , , ...args] = process.argv;

switch (method) {
    case "GET":
        if (!id) {
            getProducts();
        } else {
            getProductById(id);
        }
        break;

    case "POST":
        createProduct();
        break;

    case "DELETE":
        deleteProduct(id);
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

async function getProductById(productId) {
    try {
        const response = await fetch(
        `https://fakestoreapi.com/products/${productId}`
    );

    const data = await response.json();

    console.log(data);
    } catch (error) {
        console.log("Error al obtener producto");
    }
}


async function createProduct() {
    try {
        const [title, price, category] = args;

        const newProduct = {
            title,
            price: Number(price),
            category
        };

    const response = await fetch(
        "https://fakestoreapi.com/products",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
        },
        body: JSON.stringify(newProduct)
        }
    );

    const data = await response.json();

    console.log(data);

    } catch (error) {
        console.log("Error al crear producto");
    }
}


async function deleteProduct(productId) {
    try {
        const response = await fetch(
            `https://fakestoreapi.com/products/${productId}`,
        {
            method: "DELETE"
        }
    );

    const data = await response.json();

    console.log(data);

    } catch (error) {
        console.log("Error al eliminar producto");
    }
}