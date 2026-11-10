const ALL = "all";
export class MaterialFilter {
 constructor() {
 this.buttons = [...document.querySelectorAll(".filter")];
 this.cards = [...document.querySelectorAll("#catalog .card")];
 this.counter = document.querySelector("#counter");
 }
 init() {
 for (const button of this.buttons) {
 button.addEventListener("click", () => this.selectMaterial(button));
 }
 this.updateCounter();
}
selectMaterial(button) {
 this.apply(button.dataset.material);
 this.updateCounter();
 this.highlight(button);
 }
 apply(material) {
 for (const card of this.cards) {
 const accepted = card.dataset.materials.split(" ");
 card.hidden = material !== ALL && !accepted.includes(material);
 }
 }
}