const CITY = "Várzea Grande";
const STATE = "MT";

export class CollectionPoint {
    constructor(dado) {
 this.id = dado.id;
 this.name = dado.name;
 this.neighborhood = dado.neighborhood;
 this.address = dado.address;
 this.zipCode = dado.zipCode;
 this.materials = dado.materials;
 this.schedule = dado.schedule;
  }
}

export function toCollectionPoints(records) {
 return records;
}