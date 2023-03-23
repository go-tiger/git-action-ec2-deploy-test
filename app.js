const express = require('express');
const router = express.Router();
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('hello hello hello hello hello hello hello test 123123123');
});

app.listen(3000, async () => {
  console.log(`서버가 실행되었습니다. http://127.0.0.1:3000`);
});
