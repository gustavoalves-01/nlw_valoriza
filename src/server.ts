import express from 'express';

const app = express();

app.get('/test-get', (req, res) => {
  return res.send('Teste de rota GET');
});

app.post('/test-post', (req, res) => {
  return res.send('Teste de rota POST');
});

app.listen(3333, () => console.log('Server is running'));
