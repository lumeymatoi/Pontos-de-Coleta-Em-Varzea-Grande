import { toCollectionPoints } from "./CollectionPoint.js";
import { PointCard } from "./PointCard.js";

export class PointCatalog {
  constructor() {
    this.list = document.querySelector("#catalog");
  }

  load(records) {
    const points = toCollectionPoints(records);
    this.list.replaceChildren(
        ...points.map((point) => new PointCard(point).toElement()),);

    return points;
  }
}
