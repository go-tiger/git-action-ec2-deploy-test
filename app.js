const express = require('express');
const router = express.Router();
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('진짜 마지막 2023.03.25 오전 2:51');
});

app.listen(3000, async () => {
  console.log(`서버가 실행되었습니다. http://127.0.0.1:3000`);
});
