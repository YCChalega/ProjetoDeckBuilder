require('dotenv').config();
const express = require('express');
const cors = require('cors');
const deckRoutes = require('./routes/deckRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/deck', deckRoutes);

app.listen(PORT, () => {
  console.log(`Servidor MTG Deck Builder rodando na porta ${PORT}`);
  console.log(`Acesse: http://localhost:${PORT}/api/deck`);
});