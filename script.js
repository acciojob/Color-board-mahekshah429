body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #111;
  color: white;
  text-align: center;
  padding: 20px;
}

h1 {
  margin-bottom: 20px;
}

.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25px, 1fr));
  gap: 2px;
  max-width: 1000px;
  margin: auto;
}

.square {
  width: 25px;
  height: 25px;
  background-color: rgb(29, 29, 29); /* Required by test */
  transition: background-color 1s ease; /* Smooth fade */
}