class Card {
  constructor(id, name, type, manaCost, imageUrl, quantity = 1) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.manaCost = manaCost;
    this.imageUrl = imageUrl;
    this.quantity = quantity;
  }
}

module.exports = Card;