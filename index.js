const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Tarjoa staattiset tiedostot (CSS, JS, kuvat jne.)
app.use(express.static('public'));

// Luo perus reitti, joka palauttaa HTML-sivun
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Interactive Page</title>
      <link rel="stylesheet" href="style.css">
    </head>
    <body>
      <h1>Welcome to My Interactive Page!</h1>
      <p>Here's a list of items:</p>
      
      <ul id="item-list">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
      
      <button onclick="addItem()">Add New Item</button>
      
      <script src="script.js"></script>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});