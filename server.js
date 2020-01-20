const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id':1,
            'image':'https://placeimg.com/64/64/animals/1',
            'name': '홍길동',
            'birthday':'921111',
            'gender':'남자',
            'job':'대학생'
          },
          {
            'id':2,
            'image':'https://placeimg.com/64/64/animals/2',
            'name': '한예슬',
            'birthday':'921212',
            'gender':'여자',
            'job':'배우'
          },
          {
            'id':3,
            'image':'https://placeimg.com/64/64/animals/3',
            'name': '박나래',
            'birthday':'921214',
            'gender':'여자',
            'job':'개그우먼'
          }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));