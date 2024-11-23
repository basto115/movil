const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); 


app.get('/users', (req, res) => {
  res.json([{ id: 1, name: 'John Doe' }]);
});

const PORT = 8100; 
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});