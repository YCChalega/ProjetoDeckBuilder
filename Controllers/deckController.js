let decklist = [];

exports.getDecklist = (req, res) => {
  res.status(200).json(decklist);
};

exports.addCard = (req, res) => {
  const { id, name, type, manaCost, imageUrl, quantity } = req.body;
  
  const existingCardIndex = decklist.findIndex(card => card.id === id);

  if (existingCardIndex !== -1) {
    decklist[existingCardIndex].quantity += (Number(quantity) || 1);
    return res.status(200).json(decklist[existingCardIndex]);
  }

  const newCard = {
    id,
    name,
    type,
    manaCost,
    imageUrl,
    quantity: Number(quantity) || 1
  };

  decklist.push(newCard);
  res.status(201).json(newCard);
};

exports.updateQuantity = (req, res) => {
  const { id } = req.params;
  const { quantity } = req.body;

  const card = decklist.find(c => c.id === id);

  if (!card) {
    return res.status(404).json({ message: "Carta não encontrada no deck." });
  }

  card.quantity = Number(quantity);
  res.status(200).json(card);
};

exports.removeCard = (req, res) => {
  const { id } = req.params;
  decklist = decklist.filter(card => card.id !== id);
  res.status(204).send();
};