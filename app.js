const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');


const port = process.env.PORT || 3000;
app.use(cors());
// app.use(express.static(path.resolve(__dirname)));
// app.use(express.static(path.resolve(__dirname, 'pages')));
app.get('/', (req, res) => {
  res.status(200).json({
    name: 'Mwibutsa Floribert',
    message: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam soluta quis magni'
  });
});

app.listen(port,() => {
  console.log(`Server started on port ${port}`);
})