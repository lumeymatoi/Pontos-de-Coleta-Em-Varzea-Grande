import { CollectionPoint, toCollectionPoints } from "./js/CollectionPoint.js";

const RECORDS = [
    {
        id: 1,
        name: "Ecoponto Centro-Sul",
        neighborhood: "Centro-Sul",
        address: "Rua Goiás, 120",
        zipCode: "78135-603",
        materials: ["battery", "electronics", "glass", "recyclable"],
       schedule: "Segunda a sexta, 8h às 17h",
    },
    {
        id: 2,
        name: "Lol",
        neighborhood: "Centro-Sul",
        address: "Rua Goiás, 120",
        zipCode: "78135-603",
        materials: ["battery", "electronics", "glass", "recyclable"],
        schedule: "Segunda a sexta, 8h às 17h",
    },
    {
        id: 3,
        name: "An",
        neighborhood: "Centro-Sul",
        address: "Rua Goiás, 120",
        zipCode: "78135-603",
        materials: ["battery", "electronics", "glass", "recyclable"],
       schedule: "Segunda a sexta, 8h às 17h",
    },
]

const points = toCollectionPoints(RECORDS);

console.table(points.map((point) => point.name));

console.log("main.js rodou", toCollectionPoints([1, 2, 3]));