const express = require('express');
const path = require('path');
const htmlRoutes = require("./Develop/Routes/html");
const apiRoutes = require("./Develop/Routes/api");
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static("public"));
// app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('./routes/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => console.log(`API server now on port ${PORT}!`));
