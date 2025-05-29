const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Conectado ao MongoDB'))
.catch(err => console.error('Erro no MongoDB:', err));

app.get('/', (req, res) => {
  res.send('API funcionando');
});


const produtoRoutes = require('./routes/produtosRoutes');
const produtoDBRoutes = require('./routes/produtoDBroutes');

app.use('/produtos', produtoRoutes);
app.use('/produtos/api', produtoDBRoutes); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(` Servidor porta ${PORT}`));
