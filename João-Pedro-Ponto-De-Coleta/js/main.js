import { toCollectionPoints } from "./CollectionPoint.js";

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
    name: "Local xpto",
    neighborhood: "Centro-Sul",
    address: "Rua Goiás, 120",
    zipCode: "78135-603",
    materials: ["battery", "electronics", "glass", "recyclable"],
    schedule: "Segunda a sexta, 8h às 17h",
  },
  {
    id: 3,
    name: "Local Batata",
    neighborhood: "Centro-Sul",
    address: "Rua Goiás, 120",
    zipCode: "78135-603",
    materials: ["battery", "electronics", "glass", "recyclable"],
    schedule: "Segunda a sexta, 8h às 17h",
  },
];

const points = toCollectionPoints(RECORDS);

import { PointCatalog } from "./PointCatalog.js";

new PointCatalog().load(RECORDS);