const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

let selectedVal;

app.get('/', (req, res) => {
  res.render('index', { selectedVal });
});

app.post('/new', (req, res) => {
  const data = req.body.name;
  selectedVal = data;
  console.log('SelectedVal is Name:', selectedVal);
  res.redirect('/');
});

// New endpoints using the global variable as a parameter
app.get('/selectedVal', (req, res) => {
  res.send(`The value of selectedVal is: ${selectedVal}`);
});

app.get('/selectedVal/uppercase', (req, res) => {
  const uppercaseVal = selectedVal ? selectedVal.toUpperCase() : 'No value';
  res.send(`The uppercase value of selectedVal is: ${uppercaseVal}`);
});

app.get('/selectedVal/length', (req, res) => {
  const length = selectedVal ? selectedVal.length : 0;
  res.send(`The length of selectedVal is: ${length}`);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

// Access selectedVal as a new variable in the global scope
global.selectedVal = selectedVal;




